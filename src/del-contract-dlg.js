import React from 'react';
import AppDialog from './app-dialog.js';
import "./app-dialog.css";

class DelContractDlg extends React.Component {
   
  cancel = (ev) => {
    this.props.cancelFunc();
  }
  
  doDel = (ev) => {
    this.props.doItFunc();
  }  
  
  
  render() {
    if (!this.props.show)
      return null;

    let contractName=this.props.contractName;
    
    return (
      <AppDialog extraClasses="delContract" >
          <p className="dlgTitle">Delete Contract {contractName}?</p>

          <button className="dlgBtn right" onClick={this.doDel}>Yes</button>
          <button className="dlgBtn right" onClick={this.cancel}>No</button>  
      </AppDialog>
      )
  }
}

export default DelContractDlg
