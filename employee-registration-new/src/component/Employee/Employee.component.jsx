import React from 'react';
import { useState } from 'react';
import './Employee.style.scss';

export default function Employee(props) {


const [orgName, setorgName] = useState('');
const [jobRole, setjobRole] = useState('');
const [empFromdate, setempFromdate] = useState('');
const [empTodate, setempTodate] = useState('');
const [ctc, setctc] = useState('');

const handleInput = (event) =>{
  // console.log(event.target.id);
  if(event.target !== undefined){
    switch(event.target.id) {
      case 'orgName' : setorgName(event.target.value);
                          break;
      case 'jobRole' : setjobRole(event.target.value);
                          break;
      case 'empFromdate' : setempFromdate(event.target.value);
                          break;
      case 'empTodate' : setempTodate(event.target.value);
                          break;
      case 'ctc' : setctc(event.target.value);
                          break;
    
      default : console.log('default');
    }
  }
}
let alertMsg, msgHelp;
const validateData = (event) => {
  event.preventDefault();
  // debugger;
  document.getElementById('employeehiddenBtn').click();
  return true;
}
  return (
    <form className="employee card">
      <h2 className="title">EMPLOYMENT DETAILS</h2>
      <div className="card-primary">
        <div className="mb-3 input-container">
          <label htmlFor="orgName" className="form-label">
          Organisation
          </label>
          <input
            type="text"
            className="form-control"
            id="orgName"
            aria-describedby="orgNameHelp"
            onChange={event => handleInput(event)}
          />
          <small id="orgNameHelp" className="form-text text-mute"></small>
        </div>
        <div className="mb-3 input-container">
          <label htmlFor="jobRole" className="form-label">
          Designation
          </label>
          <input
            type="text"
            className="form-control"
            id="jobRole"
            aria-describedby="jobRoleHelp"
            onChange={event => handleInput(event)}
          />
          <small id="jobRoleHelp" className="form-text text-mute"></small>
        </div>
        <div className="mb-3 input-container">
          <label htmlFor="empFromdate" className="form-label">
            From
          </label>
          <input
            type="text"
            className="form-control"
            id="empFromdate"
            aria-describedby="fromdateHelp"
            onChange={event => handleInput(event)}
          />
          <small id="fromdateHelp" className="form-text text-mute"></small>
        </div>
        <div className="mb-3 input-container">
          <label htmlFor="empTodate" className="form-label">
            To
          </label>
          <input
            type="text"
            className="form-control"
            id="empTodate"
            aria-describedby="empTodateHelp"
            onChange={event => handleInput(event)}
          />
          <small id="empTodateHelp" className="form-text text-mute"></small>
        </div>
        <div className="mb-3 input-container">
          <label htmlFor="ctc" className="form-label">
            Annual CTC
          </label>
          <input
            type="text"
            className="form-control"
            id="ctc"
            aria-describedby="ctcHelp"
            onChange={event => handleInput(event)}
          />
          <small id="ctcHelp" className="form-text text-mute"></small>
        </div>
      </div>
      <div className="container-btn">
      <button className="btn btn-primary" onClick={props.handlePrevNavigation}>Previous</button>
      <button className="btn btn-primary" onClick={validateData}>Next</button>
      <button type="button" id="employeehiddenBtn"  className="btn btn-primary" onClick={props.handleNextNavigation}>Next</button>
    </div>
    </form>
  )
}
