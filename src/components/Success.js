import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class Success extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  previous = e => {
    e.preventDefault();
    this.props.previousStep();
  }

  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm" />
          <h1>Thank You For Submitting Your Application</h1>
          <p>Please look out for an email for the next steps</p>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}




export default Success