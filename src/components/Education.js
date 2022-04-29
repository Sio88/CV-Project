import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class Education extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  previous = e => {
    e.preventDefault();
    this.props.previousStep();
  }

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Education" />
          <TextField
          hintText="Enter School"
          floatingLabelText="School Name"
          onChange={handleChange('schoolName')}
          defaultValue={values.schoolName}
          style={textStyle.text}
          />
          <br/>
          <TextField
          hintText="Enter Your Degree"
          floatingLabelText="Degree"
          onChange={handleChange('degree')}
          defaultValue={values.degree}
          style={textStyle.text}
          />
          <br/>
          <TextField
          hintText="Enter Your Start Date"
          floatingLabelText="Start Date"
          onChange={handleChange('startDate')}
          defaultValue={values.startDate}
          style={textStyle.text}
          />
          <br/>
          <TextField
          hintText="Enter Your End Date"
          floatingLabelText="End Date"
          onChange={handleChange('endDate')}
          defaultValue={values.endDate}
          style={textStyle.text}
          />
          <br/>
          <TextField
          hintText="Enter Your Degree"
          floatingLabelText="Degree"
          onChange={handleChange('degree')}
          defaultValue={values.degree}
          style={textStyle.text}
          />
          <br/>
          <TextField
          hintText="Enter Your Certifications"
          floatingLabelText="Certifications"
          onChange={handleChange('certifications')}
          defaultValue={values.degree}
          style={textStyle.text}
          />
          <br/>
          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
          <RaisedButton
            label="Previous"
            primary={false}
            style={styles.button}
            onClick={this.previous}
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
    backgroundColor: "grey",
    textColor: "white"
  }
}

export default Education