import React from 'react'
import {useState} from 'react';
import './Education.style.scss';

export default function Education(props) {


const [degree, setdegree] = useState('');
const [university, setuniversity] = useState('');
const [fromdate, setfromdate] = useState('');
const [todate, settodate] = useState('');
const [specialization, setspecialization] = useState('');

const handleInput = (event) =>{
  // console.log(event.target.id);
  if(event.target !== undefined){
    switch(event.target.id) {
      case 'degree' : setdegree(event.target.value);
                          break;
      case 'university' : setuniversity(event.target.value);
                          break;
      case 'fromdate' : setfromdate(event.target.value);
                          break;
      case 'todate' : settodate(event.target.value);
                          break;
      case 'specialization' : setspecialization(event.target.value);
                          break;
    
      default : console.log('default');
    }
  }
}

let alertMsg, msgHelp;
const validateData = (event) => {
  event.preventDefault();
  // debugger;
  if(!degree.trim().length>0){
    document.querySelector('#degreeHelp').classList.add('errorMsg');
    document.querySelector('#degreeHelp').innerHTML = "Degree is required";
    setTimeout(()=>{
      document.querySelector('#degreeHelp').classList.remove('errorMsg');
    },3000);
    return false;
  }
  if(!university.trim().length>0){
    document.querySelector('#universityHelp').classList.add('errorMsg');
    document.querySelector('#universityHelp').innerHTML = "University name is required";
    setTimeout(()=>{
      document.querySelector('#universityHelp').classList.remove('errorMsg');
    },3000);
    return false;
  }
  if(!fromdate.trim().length>0){
    document.querySelector('#fromdateHelp').classList.add('errorMsg');
    document.querySelector('#fromdateHelp').innerHTML = "From date is required";
    setTimeout(()=>{
      document.querySelector('#fromdateHelp').classList.remove('errorMsg');
    },3000);
    return false;
  }
  if(!todate.trim().length>0){
    document.querySelector('#todateHelp').classList.add('errorMsg');
    document.querySelector('#todateHelp').innerHTML = "To date is required";
    setTimeout(()=>{
      document.querySelector('#todateHelp').classList.remove('errorMsg');
    },3000);
    return false;
  }
  if(!specialization.trim().length>0){
    document.querySelector('#specializationHelp').classList.add('errorMsg');
    document.querySelector('#specializationHelp').innerHTML = "Specialization is required";
    setTimeout(()=>{
      document.querySelector('#specializationHelp').classList.remove('errorMsg');
    },3000);
    return false;
  }
  document.getElementById('educationhiddenBtn').click();
  return true;
}
  return (
    <form className="education card">
      <h2 className="title">EDUCATIONAL DETAILS</h2>
      <div className="card-primary">
        <div className="mb-3 input-container">
          <label htmlFor="degree" className="form-label">
          Degree
          </label>
          <input
            type="text"
            className="form-control"
            id="degree"
            aria-describedby="degreeHelp"
            onChange={event => handleInput(event)}
          />
          <small id="degreeHelp" className="form-text text-mute"></small>
        </div>
        <div className="mb-3 input-container">
          <label htmlFor="university" className="form-label">
          University/Institute
          </label>
          <input
            type="text"
            className="form-control"
            id="university"
            aria-describedby="universityHelp"
            onChange={event => handleInput(event)}
          />
          <small id="universityHelp" className="form-text text-mute"></small>
        </div>
        <div className="mb-3 input-container">
          <label htmlFor="fromdate" className="form-label">
            From
          </label>
          <input
            type="date"
            className="form-control"
            id="fromdate"
            aria-describedby="fromdateHelp"
            onChange={event => handleInput(event)}
          />
          <small id="fromdateHelp" className="form-text text-mute"></small>
        </div>
        <div className="mb-3 input-container">
          <label htmlFor="todate" className="form-label">
            To
          </label>
          <input
            type="date"
            className="form-control"
            id="todate"
            aria-describedby="todateHelp"
            onChange={event => handleInput(event)}
          />
          <small id="todateHelp" className="form-text text-mute"></small>
        </div>
        <div className="mb-3 input-container">
          <label htmlFor="specialization" className="form-label">
          Specialization
          </label>
          <input
            type="text"
            className="form-control"
            id="specialization"
            aria-describedby="specializationHelp"
            onChange={event => handleInput(event)}
          />
          <small id="specializationHelp" className="form-text text-mute"></small>
        </div>
      </div>
      <div className="container-btn">
      <button className="btn btn-primary" onClick={props.handlePrevNavigation}>Previous</button>
      <button className="btn btn-primary" onClick={validateData}>Next</button>
      <button type="button" id="educationhiddenBtn"  className="btn btn-primary" onClick={props.handleNextNavigation}>Next</button>
    </div>
    </form>
  )
}
