import React, {useState} from "react";
import Stepper from 'react-js-stepper';

import Personal from "../Personal/Personal.component";
import Family from "../Family/Family.component";
import Education from "../Education/Education.component";
import Employee from "../Employee/Employee.component";
import Upload from "../Upload/Upload.component";


const Form =() => {
  const [activeStep, setActiveStep] = useState(0);
  const [personalData, setPersonalData] = useState([]);
  const [educationData, setEducationData] = useState([]);
  const [familyData, setFamilyData] = useState([]);
  const [employeeData, setEmployeeData] = useState([]);

  const personalDataAttributes= (obj) => {
    let temp = [];
    temp.push(obj);
    setPersonalData(temp);
  };
  const educationDataAttributes= (eduObj) => {
    let temp = [];
    temp.push(eduObj);
    setEducationData(temp);
  };
  const familyDataAttributes= (familyObj) => {
    let temp = [];
    temp.push(familyObj);
    setFamilyData(temp);
  };
  const employeeDataAttributes= (employeeObj) => {
    let temp = [];
    temp.push(employeeObj);
    setEmployeeData(temp);
  };
    
    const handleNextNavigation = () => {
      console.log(personalData);
      console.log(educationData);
      console.log(familyData);
      console.log(employeeData);
      setActiveStep(activeStep + 1);
    }
    const handlePrevNavigation = () => {
      setActiveStep(activeStep - 1);
    }
  return(
    <div className="form">
    <div className="container">
        <Stepper 
        steps={[
          {
            title: 'Personal',
          },
          {
            title: 'Family',
          },
          {
            title: 'Education',
          },
          {
            title: 'Employee',
          },
          {
            title: 'Upload',
          },
        ]} 
        activeStep={activeStep + 1}
        // onSelect={handleOnClickStepper}
        showNumber={false} 
    />
    </div>
    <div className="components">
      {activeStep === 0 ? (
        // <Upload handlePrevNavigation={handlePrevNavigation} />
        // <Employee handleNextNavigation={handleNextNavigation} handlePrevNavigation={handlePrevNavigation} employeeDataAttributes = {employeeDataAttributes} employeeData={educationData}   />
        // <Education handleNextNavigation={handleNextNavigation} handlePrevNavigation={handlePrevNavigation} educationDataAttributes = {educationDataAttributes} educationData={educationData}  />
        // <Family handleNextNavigation={handleNextNavigation} handlePrevNavigation={handlePrevNavigation} familyDataAttributes = {familyDataAttributes} familyData={familyData} />
        <Personal handleNextNavigation={handleNextNavigation} personalDataAttributes = {personalDataAttributes} personalData={personalData} />
      ) : activeStep === 1 ? (
        <Family handleNextNavigation={handleNextNavigation} handlePrevNavigation={handlePrevNavigation} familyDataAttributes = {familyDataAttributes} familyData={familyData} />
      ) : activeStep === 2 ? (
        <Education handleNextNavigation={handleNextNavigation} handlePrevNavigation={handlePrevNavigation} educationDataAttributes = {educationDataAttributes} educationData={educationData}  />
      ) : activeStep === 3 ? (
        <Employee handleNextNavigation={handleNextNavigation} handlePrevNavigation={handlePrevNavigation} employeeDataAttributes = {employeeDataAttributes} employeeData={educationData}   />
      ) : activeStep === 4 ? 
        <Upload handlePrevNavigation={handlePrevNavigation} />
        : (
        ''
      )}
    </div>
    </div>
  )
}
export default Form;