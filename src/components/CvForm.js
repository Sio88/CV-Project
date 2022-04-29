import React, { Component } from 'react';
import PersonalDetails from './PersonalDetails';
import Education from './Education';
import Experience from './Experience';
import Confirm from './Confirm';
import Success from './Success'

export class CvForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        address: '',
        schoolName: '',
        degree: '',
        startDate: '',
        endDate: '',
        certifications: '',
        company: '',
        position: '',
        mainTask: '',
        beginningDate: '',
        endDate: '',
      }
      nextStep = () => {
        const { step } = this.state;
        this.setState({
          step: step + 1
        });
      }
    
      previousStep = () => {
        const { step } = this.state;
        this.setState({
          step: step - 1
        });
      }
    
      handleChange = input => e => {
        this.setState({[input]: e.target.value});
      }


  render() {
    const {step} = this.state;
    const { firstName, lastName, email, phoneNumber, address, schoolName, degree, startDate, endDate, certifications, company, position, mainTask, beginningDate }= this.state;
    const values = { firstName, lastName, email, phoneNumber, address, schoolName, degree, startDate, endDate, certifications, company, position, mainTask, beginningDate, endDate }
    
    switch(step) {
      case 1:
        return (
            <PersonalDetails
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          values={values}
           />
        )
      case 2: 
         return (
         <Education
         nextStep={this.nextStep}
         previousStep={this.previousStep}
         handleChange={this.handleChange}
         values={values}
          />
         )
      case 3:
         return (
          <Experience
          nextStep={this.nextStep}
          previousStep={this.previousStep}
          handleChange={this.handleChange}
          values={values}
           />
          )
      case 4: 
      return (
          <Confirm
          nextStep={this.nextStep}
          previousStep={this.previousStep}
          values={values}
           />
          )
      case 5:
          return (
            <Success/>
            )
      
        }
  }
}



export default CvForm