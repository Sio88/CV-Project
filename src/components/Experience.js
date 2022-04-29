import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class Experience extends Component {
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
          <AppBar title="Experience" />
          <TextField
          hintText="Enter Company"
          floatingLabelText="Company's Name"
          onChange={handleChange('companyName')}
          defaultValue={values.companyName}
          style={textStyle.text}
          />
          <br/>
          <TextField
          hintText="Enter Your Position"
          floatingLabelText="Position"
          onChange={handleChange('position')}
          defaultValue={values.position}
          style={textStyle.text}
          />
          <br/>
          <TextField
          hintText="Enter Your Main Tasks"
          floatingLabelText="Main Tasks"
          onChange={handleChange('maintask')}
          defaultValue={values.mainTask}
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
          hintText="Enter Company"
          floatingLabelText="Company's Name"
          onChange={handleChange('companyName')}
          defaultValue={values.companyName}
          style={textStyle.text}
          />
          <br/>
          <TextField
          hintText="Enter Your Position"
          floatingLabelText="Position"
          onChange={handleChange('position')}
          defaultValue={values.position}
          style={textStyle.text}
          />
          <br/>
          <TextField
          hintText="Enter Your Main Tasks"
          floatingLabelText="Main Tasks"
          onChange={handleChange('maintask')}
          defaultValue={values.mainTask}
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
          hintText="Enter Company"
          floatingLabelText="Company's Name"
          onChange={handleChange('companyName')}
          defaultValue={values.companyName}
          style={textStyle.text}
          />
          <br/>
          <TextField
          hintText="Enter Your Position"
          floatingLabelText="Position"
          onChange={handleChange('position')}
          defaultValue={values.position}
          style={textStyle.text}
          />
          <br/>
          <TextField
          hintText="Enter Your Main Tasks"
          floatingLabelText="Main Task"
          onChange={handleChange('maintask')}
          defaultValue={values.mainTask}
          style={textStyle.text}
          />
          <br/>
          <TextField
          hintText="Enter Your Beginning Date"
          floatingLabelText="Beginning Date"
          onChange={handleChange('beginningDate')}
          defaultValue={values.beginningDate}
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

export default Experience