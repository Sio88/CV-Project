import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  previous = e => {
    e.preventDefault();
    this.props.previousStep();
  }

  render() {
    const { values: { firstName, lastName, email, phoneNumber, address, schoolName, degree, startDate, endDate, certifications, company, position, mainTask, beginningDate }
  }= this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm" />
          <List>
            <ListItem
            primaryText="First Name"
            secondaryText={ firstName }
            />
            <ListItem
            primaryText="Last Name"
            secondaryText={ lastName }
            />
            <ListItem
            primaryText="Email"
            secondaryText={ email }
            />
            <ListItem
            primaryText="Phone Number"
            secondaryText={ phoneNumber }
            />
            <ListItem
            primaryText="Address"
            secondaryText={ address }
            />
            <ListItem
            primaryText="School Name"
            secondaryText={ schoolName }
            />
            <ListItem
            primaryText="Degree"
            secondaryText={ degree }
            />
            <ListItem
            primaryText="Start Date"
            secondaryText={ startDate }
            />
            <ListItem
            primaryText="End Date"
            secondaryText={ endDate }
            />
            <ListItem
            primaryText="Certifications"
            secondaryText={ certifications }
            />
            <ListItem
            primaryText="Company"
            secondaryText={ company }
            />
            <ListItem
            primaryText="Position"
            secondaryText={ position }
            />
            <ListItem
            primaryText="Main Task"
            secondaryText={ mainTask }
            />
            <ListItem
            primaryText="Beginning Date"
            secondaryText={ beginningDate }
            />
            <ListItem
            primaryText="End Date"
            secondaryText={ endDate }
            />
            <ListItem
            primaryText="Company"
            secondaryText={ company }
            />
            <ListItem
            primaryText="Position"
            secondaryText={ position }
            />
            <ListItem
            primaryText="Main Task"
            secondaryText={ mainTask }
            />
            <ListItem
            primaryText="Beginning Date"
            secondaryText={ beginningDate }
            />
            <ListItem
            primaryText="End Date"
            secondaryText={ endDate }
            />
            <ListItem
            primaryText="Company"
            secondaryText={ company }
            />
            <ListItem
            primaryText="Position"
            secondaryText={ position }
            />
            <ListItem
            primaryText="Main Task"
            secondaryText={ mainTask }
            />
            <ListItem
            primaryText="Beginning Date"
            secondaryText={ beginningDate }
            />
            <ListItem
            primaryText="End Date"
            secondaryText={ endDate }
            />
          </List>
          <br/>
          <RaisedButton
            label="Confirm & Continue"
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

export default Confirm