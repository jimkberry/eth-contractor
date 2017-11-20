import React, { Component } from 'react';
import { contractABIs, contractList } from './contract-abis';
import {ContractInfo, web3} from './contract-info';
import './App.css';
import './app-panel.css';

class App extends Component {
    
    constructor(props) {
      super(props);

      let cName = Object.keys(contractABIs)[0];
      let contractInfo = new ContractInfo(cName);
      let fSig =  contractInfo.funcSigs[0]; 
      let defParams = this.defParams(contractInfo,fSig)        
      
      this.state = { 
              contractInfo: contractInfo,
              curFuncSig: fSig,
              funcParams: defParams
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
        let contractInfo = new ContractInfo(cName);
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
           <div className='AppPanel internal'>
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
           <div className='AppPanel internal'>
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
        
        let paramPanel = this.paramsForm(ci, curFuncSig, curVals);
        
        let outputs = this.outputPanel(ci, curFuncSig, curVals);        
        
        return (
            <div className="App" style={{height: window.innerHeight+"px"}}>
                <div className='AppPanel'>
                
                    <p className="panTitle">Contract encodeABI() Helper</p>
                    
                    <label htmlFor="contract_fld" className="panLabel left">Contract: </label>          
                    <select id="contract_fld" className="panSelFld" onChange={this.onSelect} 
                        defaultValue={ts.contract_name}>         
                          {contractList().map((cName, i) => {
                              return <option key={i} value={cName}>{cName}</option>;              
                          })}          
                    </select><br /> 
                    
                    <label htmlFor="function_fld" className="panLabel left">Function: </label>          
                    <select id="function_fld" className="panSelFld" onChange={this.onSelect} 
                        value={curFuncSig}>         
                          {ci.funcSigs.map((sig, i) => {
                              return <option key={i} value={sig}>{ci.funcSpecs[sig]}</option>;              
                          })}          
                    </select><br /> 
                    
                    <br />
                    
                    {paramPanel}<br />    
                    
                    {outputs}
                    
                </div>            
            </div>
        );
    }
}

export default App;
