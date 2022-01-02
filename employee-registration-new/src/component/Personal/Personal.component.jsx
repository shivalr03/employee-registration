import React from "react";
import {useState, useEffect} from 'react';
import { Formik, Field, Form } from "formik";
import Button from "@material-ui/core/Button"; 
import "./personal.style.scss";

let Personal = (props) => {
  const [fullName, setFullName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [currentAddress, setCurrentAddress] = useState('');
  const [permanentAddress, setPermanentAddress] = useState('');
  const [emergencyName, setemergencyName] = useState('');
  const [emergencyRelation, setemergencyRelation] = useState('');
  const [emergencyContact, setemergencyContact] = useState('');
  const [isValidated, setValidation] = useState(true);
  const [count, setCount] = useState([0]);

  useEffect(() => {
    console.log("on Mount");
    console.log(props);
  }, []);
   
 const handleInput = (event) =>{
  // console.log(event.target.id);
  if(event.target !== undefined){
    switch(event.target.id) {
      case 'fullName' : setFullName(event.target.value);
                          break;
      case 'fatherName' :setFatherName(event.target.value);
                          break;
      case 'mobile' :setMobile(event.target.value);
                          break;
      case 'email' :setEmail(event.target.value);
                          break;
      case 'date' :setDate(event.target.value);
                          break;
      case 'currentAddress' : setCurrentAddress(event.target.value);
                          break;
      case 'permanentAddress' : setPermanentAddress(event.target.value);
                          break;
      case 'emergencyName' : setemergencyName(event.target.value);
                          break;
      case 'emergencyRelation' : setemergencyRelation(event.target.value);
                          break;
      case 'emergencyContact' : setemergencyContact(event.target.value);
                          break;
     default : console.log('default');
    }
  }
}
let alertMsg, msgHelp;
const validateData = (event) => {
  const validRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const mobRegex = /^\d{10}$/;
  event.preventDefault();
  // debugger;
  if(!fullName.trim().length>0){
    document.querySelector('#fullNameHelp').classList.add('errorMsg');
    document.querySelector('#fullNameHelp').innerHTML = "Full Name is required";
    setTimeout(()=>{
      document.querySelector('#fullNameHelp').classList.remove('errorMsg');
    },3000);
    document.querySelector('#fullName').focus();
    return false;
  }
  if(!fatherName.trim().length>0){
    document.querySelector('#FatherNameHelp').classList.add('errorMsg');
    document.querySelector('#FatherNameHelp').innerHTML = "Father Name is required";
    // console.log('FatherName');
    setTimeout(()=>{
      document.querySelector('#FatherNameHelp').classList.remove('errorMsg');
    },3000);
    document.querySelector('#FatherName').focus();
    return false;
  }
  if(!mobile.trim().length>0){
    document.querySelector('#mobileHelp').classList.add('errorMsg');
    document.querySelector('#mobileHelp').innerHTML = "Mobile number is required";
    setTimeout(()=>{
      document.querySelector('#mobileHelp').classList.remove('errorMsg');
    },3000);
    document.querySelector('#mobile').focus();
    return false;
  }
  else if(!mobRegex.test(mobile)){
    document.querySelector('#mobileHelp').classList.add('errorMsg');
    document.querySelector('#mobileHelp').innerHTML = "Mobile number should be 10 digit";
    document.querySelector('#mobile').focus();
    setTimeout(()=>{
      document.querySelector('#mobileHelp').classList.remove('errorMsg');
    },3000);
    return false;
  }
  if(!email.trim().length>0){
    document.querySelector('#emailHelp').classList.add('errorMsg');
    document.querySelector('#emailHelp').innerHTML = "Email address is required";
    document.querySelector('#email').focus();
    setTimeout(()=>{
      document.querySelector('#emailHelp').classList.remove('errorMsg');
    },3000);
    return false;
  } else if(!validRegex.test(email)){
    debugger;
    document.querySelector('#emailHelp').classList.add('errorMsg');
    document.querySelector('#emailHelp').innerHTML = "Email address is not valid";
    document.querySelector('#email').focus();
    setTimeout(()=>{
      document.querySelector('#emailHelp').classList.remove('errorMsg');
    },3000);
    return false;
  }
  if(!date.trim().length>0){
    document.querySelector('#dateHelp').classList.add('errorMsg');
    document.querySelector('#dateHelp').innerHTML = "Date is required";
    // console.log('date');
    setTimeout(()=>{
      document.querySelector('#dateHelp').classList.remove('errorMsg');
    },3000);
    document.querySelector('#date').focus();
    return false;
  }
  if(!currentAddress.trim().length>0){
    document.querySelector('#emergencyNameHelp').classList.add('errorMsg');
    document.querySelector('#emergencyNameHelp').innerHTML = "Current address is required";
    // console.log('currentAddress');
    setTimeout(()=>{
      document.querySelector('#emergencyNameHelp').classList.remove('errorMsg');
    },3000);
    document.querySelector('#currentAddress').focus();
    return false;
  }
  if(!permanentAddress.trim().length>0){
    document.querySelector('#permanentAddressHelp').classList.add('errorMsg');
    document.querySelector('#permanentAddressHelp').innerHTML = "Permanent address is required";
    // console.log('permanentAddress');
    setTimeout(()=>{
      document.querySelector('#permanentAddressHelp').classList.remove('errorMsg');
    },3000);
    document.querySelector('#permanentAddress').focus();
    return false;
  }
  if(!emergencyName.trim().length>0){
    document.querySelector('#emergencyNameHelp').classList.add('errorMsg');
    document.querySelector('#emergencyNameHelp').innerHTML = "Relation is required";
    // console.log('emergencyName');
    setTimeout(()=>{
      document.querySelector('#emergencyNameHelp').classList.remove('errorMsg');
    },3000);
    document.querySelector('#emergencyName').focus();
    return false;
  }
  if(!emergencyRelation.trim().length>0){
    document.querySelector('#emergencyRelationHelp').classList.add('errorMsg');
    document.querySelector('#emergencyRelationHelp').innerHTML = "Relation is required";
    // console.log('emergencyRelation');
    setTimeout(()=>{
      document.querySelector('#emergencyRelationHelp').classList.remove('errorMsg');
    },3000);
    document.querySelector('#emergencyRelation').focus();
    return false;
  }
  if(!emergencyContact.trim().length>0){
    document.querySelector('#emergencyContactHelp').classList.add('errorMsg');
    document.querySelector('#emergencyContactHelp').innerHTML = "Contact number is required";
    // console.log('emergencyContact');
    setTimeout(()=>{
      document.querySelector('#emergencyContactHelp').classList.remove('errorMsg');
    },3000);
    document.querySelector('#emergencyContact').focus();
    return false;
  }else if(!mobRegex.test(emergencyContact)){
    document.querySelector('#emergencyContactHelp').classList.add('errorMsg');
    document.querySelector('#emergencyContactHelp').innerHTML = "Contact number should be 10 digit";
    document.querySelector('#emergencyContact').focus();
    setTimeout(()=>{
      document.querySelector('#emergencyContactHelp').classList.remove('errorMsg');
    },3000);
    return false;
  }
  let obj = {
    full_name: fullName.trim(),
    father_name: fatherName.trim(),
    mobile: mobile.trim(),
    email: email.trim(),
    date: date.trim(),
    currentAddress: currentAddress.trim(),
    permanentAddress: permanentAddress.trim(),
    emergencyName: emergencyName.trim(),
    emergencyRelation: emergencyRelation.trim(),
    emergencyContact: emergencyContact.trim(),
  }
  
  // console.log("Your data:", obj);
  props.personalDataAttributes(obj);

  props.handleNextNavigation();

  return true;
  
}

  return (
    <form className="personal card">
      <h2 className="title">PERSONAL DETAILS</h2>
      <div className="mb-3 input-container">
        <label htmlFor="fullName" className="form-label">
          Full Name
        </label>
        <input
          type="text"
          className="form-control"
          id="fullName"
          aria-describedby="fullNameHelp"
          onChange={event => handleInput(event)}
          defaultValue={props.personalData.length>0?props.personalData[0].full_name:''}
          required
        />
        <small id="fullNameHelp" className="form-text text-mute"></small>
      </div>
      <div className="mb-3 input-container">
        <label htmlFor="fatherName" className="form-label">
          Father's Name
        </label>
        <input
          type="text"
          className="form-control"
          id="fatherName"
          aria-describedby="fatherNameHelp"
          onChange={event => handleInput(event)}
          required
        />
        <small id="fatherNameHelp" className="form-text text-mute"></small>
      </div>
      <div className="mb-3 input-container">
        <label htmlFor="mobile" className="form-label">
          Mobile
        </label>
        <input
          type="text"
          className="form-control"
          id="mobile"
          aria-describedby="mobileHelp"
          onChange={event => handleInput(event)}
          maxLength={10}
          required
        />
        <small id="mobileHelp" className="form-text text-mute"></small>
      </div>
      <div className="mb-3 input-container">
        <label htmlFor="email" className="form-label">
          Email Id:
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          onChange={event => handleInput(event)}
          required
        />
        <div id="emailHelp" className="form-text text-mute">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3 input-container">
        <label htmlFor="dob" className="form-label">
          Date of Birth:
        </label>
        <input
          type="date"
          className="form-control"
          id="date"
          aria-describedby="dateHelp"
          onChange={event => handleInput(event)}
          required
        />
        <small id="dateHelp" className="form-text text-mute"></small>
      </div>
      <div className="mb-3 input-container">
        <label htmlFor="currentAddress" className="form-label">
          Correspondence Address:{" "}
        </label>
        <textarea
          type="text"
          className="form-control address"
          id="currentAddress"
          aria-describedby="currentAddressHelp"
          onChange={event => handleInput(event)}
        />
        <small id="currentAddressHelp" className="form-text text-mute"></small>
      </div>
      <div className="mb-3 input-container">
        <label htmlFor="permanentAddress" className="form-label">
          Permanent Address:{" "}
        </label>
        <textarea
          type="text"
          className="form-control address"
          id="permanentAddress"
          aria-describedby="permanentAddressHelp"
          onChange={event => handleInput(event)}
        />
        <small id="permanentAddressHelp" className="form-text text-mute"></small>
      </div>
      <h2 className="sub-title">Emergency Contact Details</h2>
      <div className="mb-3 input-container">
        <label htmlFor="emergencyName" className="form-label">
          Full Name
        </label>
        <input
          type="text"
          className="form-control"
          id="emergencyName"
          aria-describedby="emergencyNameHelp"
          onChange={event => handleInput(event)}
          required
        />
        <small id="emergencyNameHelp" className="form-text text-mute"></small>
      </div>
      <div className="mb-3 input-container">
        <label htmlFor="emergencyRelation" className="form-label">
          Relation
        </label>
        <input
          type="text"
          className="form-control"
          id="emergencyRelation"
          aria-describedby="emergencyRelationHelp"
          onChange={event => handleInput(event)}
          required
        />
        <small id="emergencyRelationHelp" className="form-text text-mute"></small>
      </div>
      <div className="mb-3 input-container">
        <label htmlFor="emergencyContact" className="form-label">
        Contact No:
        </label>
        <input
          type="text"
          className="form-control"
          id="emergencyContact"
          aria-describedby="emergencyContactHelp"
          onChange={event => handleInput(event)}
          maxLength={10}
        />
        <small id="emergencyContactHelp" className="form-text text-mute"></small>
      </div>
      <div className="container-btn">
      <Button variant="contained" size="large" type="submit" id="PersonalBtn"  className="btn btn-primary" onClick={validateData}>Next</Button>
    </div>
    </form>
  );
};

export default Personal;
