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

  const personalDataAttributes= (obj) => {
    let temp = [];
    temp.push(obj);
    setPersonalData(temp);
  };
    
    const handleNextNavigation = () => {
      console.log(personalData);
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
        <Personal handleNextNavigation={handleNextNavigation} personalDataAttributes = {personalDataAttributes} personalData={personalData} />
      ) : activeStep === 1 ? (
        <Family handleNextNavigation={handleNextNavigation} handlePrevNavigation={handlePrevNavigation} />
      ) : activeStep === 2 ? (
        <Education handleNextNavigation={handleNextNavigation} handlePrevNavigation={handlePrevNavigation}  />
      ) : activeStep === 3 ? (
        <Employee handleNextNavigation={handleNextNavigation} handlePrevNavigation={handlePrevNavigation}  />
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