import React from 'react';
import AppDialog from './app-dialog.js';
import "./app-dialog.css";

class NewContractDlg extends React.Component {
  
  constructor(props) {
    super(props);     
    this.state = { abi: '', contractName: '' };
  }
  
  cancel = (ev) => {
    this.props.cancelFunc();
  }
  
  doCreate = (ev) => {
    let newABI =  JSON.parse(this.state.abi);
  
    this.props.createFunc(this.state.contractName,newABI);
  }  
  
  onTextInput = (ev) => {
    switch(ev.target.id) {
    case 'name_fld':
      this.setState({contractName: ev.target.value});
      break;
    case 'abi_fld':
      this.setState({abi: ev.target.value});
      break;      
    default:
      break
    }
  }
  
  render() {
    if (!this.props.show)
      return null;
    
    let curAbi=this.state.abi;
    let curName=this.state.contractName;
    
    return (
      <AppDialog extraClasses="newContract" >
          <p className="dlgTitle">Add Contract</p>
          
          <label htmlFor="name_fld" className="dlgLabel left">Contract Name:</label>        
          <input type="text" id="name_fld" onChange={this.onTextInput} 
              className="dlgTxtFld right wide" value={curName} /> <br />          
          
          <label htmlFor="abi_fld" className="dlgLabel left top">ABI:</label>  
          <textarea id="abi_fld" rows="15" onChange={this.onTextInput} 
              className="dlgTxtFld wide" value={curAbi} /> <br />

          <button className="dlgBtn right" onClick={this.doCreate}>Create</button>
          <button className="dlgBtn right" onClick={this.cancel}>Cancel</button>  
      </AppDialog>
      )
  }
}

export default NewContractDlg
