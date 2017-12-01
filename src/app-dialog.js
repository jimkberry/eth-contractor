import React from 'react';
import './app-dialog.css';

class AppDialog extends React.Component {
  
  render() {  
    let cover = this.props.disabled ? <div className="cover"/> : '';
    let classes = "AppDialog " + this.props.extraClasses;
    return ( 
      <div className={classes}>
          {this.props.children}
          {cover}

      </div>
    );
  }
}

export default AppDialog;
