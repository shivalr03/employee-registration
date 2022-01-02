import React from "react";
import {useState} from 'react';
import './Family.style.scss';
export default function Family(props) {
  const [fullName, setFullName] = useState('');
  const [familyRelation, setfamilyRelation] = useState('');
  const [FamilyOccupation, setFamilyOccupation] = useState('');
  const [FamilyDob, setFamilyDob] = useState('');
  
  const handleInput = (event) =>{
    console.log(event.target.id);
    if(event.target !== undefined){
      switch(event.target.id) {
        case 'fullName' : setFullName(event.target.value);
                            break;
        case 'familyRelation' :setfamilyRelation(event.target.value);
                            break;
        case 'FamilyOccupation' :setFamilyOccupation(event.target.value);
                            break;
        case 'FamilyDob' :setFamilyDob(event.target.value);
                            break;
       default : console.log('default');
      }
    }
  }
  let alertMsg, msgHelp;
const validateData = (event) => {
  event.preventDefault();
  // debugger;
  if(!fullName.trim().length>0){
    document.querySelector('#fullNameHelp').classList.add('errorMsg');
    document.querySelector('#fullNameHelp').innerHTML = "Full Name is required";
    setTimeout(()=>{
      document.querySelector('#fullNameHelp').classList.remove('errorMsg');
    },3000);
    return false;
  }
  if(!familyRelation.trim().length>0){
    document.querySelector('#familyRelationHelp').classList.add('errorMsg');
    document.querySelector('#familyRelationHelp').innerHTML = "Family relation is required";
    setTimeout(()=>{
      document.querySelector('#familyRelationHelp').classList.remove('errorMsg');
    },3000);
    return false;
  }
  if(!FamilyOccupation.trim().length>0){
    document.querySelector('#FamilyOccupationHelp').classList.add('errorMsg');
    document.querySelector('#FamilyOccupationHelp').innerHTML = "occupation is required";
    setTimeout(()=>{
      document.querySelector('#FamilyOccupationHelp').classList.remove('errorMsg');
    },3000);
    return false;
  }
  if(!FamilyDob.trim().length>0){
    document.querySelector('#FamilyDobHelp').classList.add('errorMsg');
    document.querySelector('#FamilyDobHelp').innerHTML = "Date of birth is required";
    console.log('FamilyDob');
    setTimeout(()=>{
      document.querySelector('#FamilyDobHelp').classList.remove('errorMsg');
    },3000);
    return false;
  }
  document.getElementById('familyhiddenBtn').click();
  return true;
}
  return (
    <form className="family card">
      <h2 className="title">FAMILY DETAILS</h2>
      <div className="card-primary">
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
          />
          <small id="fullNameHelp" className="form-text text-mute"></small>
        </div>
        <div className="mb-3 input-container">
          <label htmlFor="familyRelation" className="form-label">
            Relation
          </label>
          <input
            type="text"
            className="form-control"
            id="familyRelation"
            aria-describedby="familyRelationHelp"
            onChange={event => handleInput(event)}
          />
          <small id="familyRelationHelp" className="form-text text-mute"></small>
        </div>
        <div className="mb-3 input-container">
          <label htmlFor="FamilyOccupation" className="form-label">
            Occupation
          </label>
          <input
            type="text"
            className="form-control"
            id="FamilyOccupation"
            aria-describedby="FamilyOccupationHelp"
            onChange={event => handleInput(event)}
          />
          <small id="FamilyOccupationHelp" className="form-text text-mute"></small>
        </div>
        <div className="mb-3 input-container">
          <label htmlFor="FamilyDob" className="form-label">
            Date of Birth
          </label>
          <input
            type="date"
            className="form-control"
            id="FamilyDob"
            aria-describedby="FamilyDobHelp"
            onChange={event => handleInput(event)}
          />
          <small id="FamilyDobHelp" className="form-text text-mute"></small>
        </div>
      </div>
      <div className="container-btn">
      <button className="btn btn-primary" onClick={props.handlePrevNavigation}>Previous</button>
      <button className="btn btn-primary" onClick={validateData}>Next</button>
      <button type="button" id="familyhiddenBtn"  className="btn btn-primary" onClick={props.handleNextNavigation}>Next</button>
    </div>
    </form>
  );
}
