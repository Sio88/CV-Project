import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class PersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Personal Details" />
          <TextField
          hintText="Enter Your First Name"
          floatingLabelText="First Name"
          onChange={handleChange('firstName')}
          defaultValue={values.firstName}
          style={textStyle.text}
          
          />
          <br/>
          <TextField
          hintText="Enter Your Last Name"
          floatingLabelText="Last Name"
          onChange={handleChange('lastName')}
          defaultValue={values.lastName}
          style={textStyle.text}
          />
          <br/>
          <TextField
          hintText="Enter Your Email"
          floatingLabelText="Email"
          onChange={handleChange('email')}
          defaultValue={values.email}
          style={textStyle.text}
          />
          <br/>
          <TextField
          hintText="Enter Your Phone Number"
          floatingLabelText="Phone Number"
          onChange={handleChange('phoneNumber')}
          defaultValue={values.phoneNumber}
          style={textStyle.text}
          />
          <br/>
          <TextField
          hintText="Enter Your Address"
          floatingLabelText="Address"
          onChange={handleChange('address')}
          defaultValue={values.address}
          style={textStyle.text}
          />
          <br/>
          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15,
    padding: 15,
  }
}

const textStyle ={
  text: {
    backgroundColor: 'grey',
  }
}



export default PersonalDetails