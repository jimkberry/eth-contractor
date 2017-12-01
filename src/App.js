import React, { Component } from 'react';
import { defContractABIs } from './contract-abis';
import {ContractInfo, web3} from './contract-info';
import './App.css';
import "./app-dialog.css";
import "./app-panel.css"
import AppDialog from "./app-dialog.js"
import NewContractDlg from './new-contract-dlg.js'; 
import DelContractDlg from './del-contract-dlg.js'; 

class App extends Component {
    
    constructor(props) {
      super(props);

      let ABIs=defContractABIs;
      let cName = Object.keys(ABIs)[0];
      let contractInfo = new ContractInfo(ABIs,cName);
      let fSig =  contractInfo.funcSigs[0]; 
      let defParams = this.defParams(contractInfo,fSig)        
      
      this.state = { 
              contractABIs: ABIs,
              contractInfo: contractInfo,
              curFuncSig: fSig,
              funcParams: defParams,
              appDlgDisabledFor: null // or non-null "reason" (addContract)
      };
    }    
    
    
    defaultVal = (typ) => {
        
        let defVal = "0";
        let isArray = false;
        if (typ.endsWith("[]"))
        {
            isArray = true;
            typ = typ.split("[")[0];
        }

        if (typ === "address")
            defVal = "0x0000000000000000000000000000000000000000";
        
        if (typ.startsWith("bytes"))
        {
            defVal = "0x0000";
        }
        
        if (isArray)
            defVal = "[" + defVal + "]";
        
        return defVal;
    }

    defParams = (contractInfo, fSig) => {        
        let ins = contractInfo.inputSpecs[fSig];  
        let dp = [];
        if (ins)
            dp = ins.map( (p) => this.defaultVal(p.type));
        return dp;
    }
    
    setContract = (cName) => {
        let contractInfo = new ContractInfo(this.state.contractABIs,cName);
        let fSig =  contractInfo.funcSigs[0]; 
        let defParams = this.defParams(contractInfo,fSig)        
        
        this.setState({ 
                contractInfo: contractInfo,
                curFuncSig: fSig,
                funcParams: defParams
        });        
    }
    
    setFunction = (fSig) => {
        let ci = this.state.contractInfo;
        let defParams = this.defParams(ci, fSig)
        this.setState({curFuncSig: fSig,
            funcParams: defParams});         
    }    
    
    onSelect = (ev) => {
      switch(ev.target.id) {  
      case 'contract_fld':
        this.setContract(ev.target.value); 
        break;
 
      case 'function_fld':
        this.setFunction(ev.target.value);
        break;        
        
      default:
        break;
      }
    }    
  
    
    onTextInput = (ev) => {
     
        let targID = ev.target.id;
        console.log(targID);
        if (targID.startsWith("input_fld_"))
        {
            let idx = parseInt(targID.split("_")[2],10)
            let newInputs = this.state.funcParams.slice(0); // copy
            newInputs[idx] = ev.target.value;;
            this.setState({funcParams: newInputs}); 
        }
  
    }
    
    // New contract
    showNewContractDlg = (ev) => {
        this.setState({appDlgDisabledFor: "newContractDlg"});
    }
    
    cancelNewContract = () => {
        this.setState({appDlgDisabledFor: null});        
    }
    
    doNewContract = (cName,abi) => {
        let newABIs = {...this.state.contractABIs};
        newABIs[cName]=abi;;
        this.setState({appDlgDisabledFor: null,
                        contractABIs: newABIs});                  
    }    
    
    // delete contract
    showDelContractDlg = (ev) => {
        this.setState({appDlgDisabledFor: "delContractDlg"});
    }
    
    cancelDelContract = () => {
        this.setState({appDlgDisabledFor: null});        
    }
    
    doDelContract = () => {
        let cName = this.state.contractInfo.name;
        let newABIs = {...this.state.contractABIs};
        delete newABIs[cName];
        cName = Object.keys(newABIs)[0];
        this.setState({appDlgDisabledFor: null,
            contractABIs: newABIs}); 
        this.setContract(cName);
    }     
    
    
    paramsForm = (contractInfo, fSig, curVals) => {
        let inData = contractInfo.inputSpecs[fSig];

        if (!inData || !inData.length)
            return null;

        let dataRows = inData.map( (dat, i) => {
            let fldId = "input_fld_" + i;
            let fName = dat.name || "<anon>";
            return (
                <span key={i}>
                <label htmlFor= {fldId} className="panLabel left small">{fName}:</label>        
                <input type="text" id= {fldId} onChange={this.onTextInput} 
                    className="panTxtFld right wide" value={curVals[i]} /> <br />
                </span>
               );
            });
        
        return(             
           <div className='AppPanel'>
               {dataRows}
           </div>  
        );  
    }
 
    encodeParamsOnly = (paramTypes, vals) => {
        return web3.eth.abi.encodeParameters(paramTypes, vals);
    }
      
    paramTextToValue = (param) =>
    {
        param = param.trim();
        if (param.startsWith("[") && param.endsWith("]"))
            param = param.slice(1,-1).split(",");
        return param;
    }     
    
    txData = (inst, baseName, paramTypes, curVals) => {
        
        let outVals = curVals.map( (v) => this.paramTextToValue(v));
        
        let hash = "????";
        try {
            if (baseName === "<Constructor>")
                hash = this.encodeParamsOnly(paramTypes, outVals);
            else
                hash = inst.methods[baseName](...outVals).encodeABI();            
        } catch (e) {
            hash = e;
        }
        return hash;
    }
    
    outputPanel = (contractInfo, fSig, curValues) => {

        if (!fSig)
            return null;
        
        let paramTypes = contractInfo.inputSpecs[fSig].map( (inp) => inp.type);
        
        // Call string
        let baseName = fSig.split("(")[0];
        let paramStr = curValues.join(",");
        let callStr = baseName + '(' + paramStr + ')';
        let dataLabel = (baseName === "<Constructor>") ? "params" : "txData";
        
        //txData
        let txData = this.txData(contractInfo.inst, baseName, paramTypes, curValues);
        //console.log(contractInfo.inst.methods[baseName]().encodeABI())
        
        return(             
           <div className='AppPanel'>
               <label htmlFor="call_fld" className="panLabel left small">Call:</label> 
               <span id="call_fld" className="valueFld">{callStr}</span>
               <br />        
               <label htmlFor="tx_data_fld" className="panLabel left small top">{dataLabel}:</label>  
               <textarea id="tx_data_fld" readOnly rows="6"
                   className="panTxtFld wide" value={txData} /> 
                                       
           </div>  
        );  
    }    
       
    render() {
        
        let ts = this.state;
        if (!ts)
            return null;
                
        let ci = this.state.contractInfo;
        let curFuncSig = ts.curFuncSig;
        let curVals = ts.funcParams;
        let contractList=Object.keys(ts.contractABIs).sort();
        
        let paramPanel = this.paramsForm(ci, curFuncSig, curVals);
        
        let outputs = this.outputPanel(ci, curFuncSig, curVals);        
        
        return (
            <div className="App" style={{height: window.innerHeight+"px"}}>
                
               <AppDialog disabled={ts.appDlgDisabledFor!=null}>
                
                    <p className="dlgTitle">Contract encodeABI() Helper</p>
                    
                    <label htmlFor="contract_fld" className="dlgLabel left">Contract: </label>          
                    <select id="contract_fld" className="dlgSelFld" onChange={this.onSelect} 
                        value={ci.name}>         
                          {contractList.map((cName, i) => {
                              return <option key={i} value={cName}>{cName}</option>;              
                          })}          
                    </select>
                    
                    &nbsp;<button className="dlgBtn" onClick={this.showNewContractDlg}>Add New</button>
                    <button className="dlgBtn" onClick={this.showDelContractDlg}>Delete</button>
                    
                    <br />
                    
                    <label htmlFor="function_fld" className="dlgLabel left">Function: </label>          
                    <select id="function_fld" className="dlgSelFld" onChange={this.onSelect} 
                        value={curFuncSig}>         
                          {ci.funcSigs.map((sig, i) => {
                              return <option key={i} value={sig}>{ci.funcSpecs[sig]}</option>;              
                          })}          
                    </select><br /> 
                    
                    <br />
                    
                    {paramPanel}<br />    
                    
                    {outputs}
                    
                </AppDialog> 
                <NewContractDlg show={ts.appDlgDisabledFor==="newContractDlg"} cancelFunc={this.cancelNewContract} createFunc={this.doNewContract} />                
                <DelContractDlg show={ts.appDlgDisabledFor==="delContractDlg"} contractName={ci.name} cancelFunc={this.cancelDelContract} doItFunc={this.doDelContract} />

            </div>
        );
    }
}

export default App;
