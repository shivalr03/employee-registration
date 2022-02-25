import React from "react";
import {useState} from 'react';
import { Formik, Field, Form } from "formik";
import  Typography from '@material-ui/core/Typography';
import  Button from '@material-ui/core/Button';
import "./upload.style.scss";

const Upload = (props) => {
  let [adhaarName, setadhaarName] = useState('');
  let [panName, setpanName] = useState('');
  let [eduName, seteduName] = useState('');
  let [expName, setexpName] = useState('');
  function addadhaarName(e){
    setadhaarName(e.target.files[0].name);
  }
  function panNameChange(e){
    setpanName(e.target.files[0].name);
  }
  function eduNameChange(e){
    seteduName(e.target.files.length + ' files');
  }
  function expNameChange(e){
    setexpName(e.target.files.length + ' files');
  }
  return (
    <form className="upload card">
      <Typography variant="h1" align='center' component="h2" className="title">Upload DETAILS</Typography>
      <div className="mb-3 input-container">
        <label htmlFor="adhaarCard" className="form-label">
         <span> Adhaar Card<i className="star">*</i></span><span> <i className="uploadBtn"><span id="adhaar-chosen">{adhaarName?adhaarName:`Upload`}</span></i></span>
        </label>
        <input
          type="file"
          className="form-control actual-btn"
          id="adhaarCard"
          aria-describedby="adhaarCardHelp"
          hidden required
          onChange={addadhaarName}
          // onChange={event => handleInput(event)}
        />
      </div>
      <div className="mb-3 input-container">
        <label htmlFor="panCard" className="form-label">
         <span> Pan Card<i className="star">*</i></span><i className="uploadBtn">{panName?panName:`Upload`}</i>
        </label>
        <input
          type="file"
          className="form-control"
          id="panCard"
          aria-describedby="panCardHelp"
          hidden required
          onChange={panNameChange}
          // onChange={event => handleInput(event)}
        />
      </div>
      <div className="mb-3 input-container">
        <label htmlFor="eduCertificate" className="form-label">
          <span>Education Certificate<i className="star">*</i></span><i className="uploadBtn">{eduName?eduName:`Upload`}</i>
        </label>
        <input
          type="file"
          className="form-control"
          id="eduCertificate"
          aria-describedby="eduCertificateHelp"
          hidden required
          multiple
          onChange={eduNameChange}
          // onChange={event => handleInput(event)}
          multiple
        />
      </div>
      <div className="mb-3 input-container">
        <label htmlFor="expLetter" className="form-label">
         <span> Experience Letter <i className="star">*</i></span> <i className="uploadBtn">{expName?expName:`Upload`}</i>
        </label>
        <input
          type="file"
          className="form-control"
          id="expLetter"
          aria-describedby="expLetterHelp"
          hidden required
          multiple
          onChange={expNameChange}
          // onChange={event => handleInput(event)}
        />
      </div>
      <div className="container-btn">
      <Button  variant="contained" color="primary"  size="large" className="btn btn-primary" onClick={props.handlePrevNavigation}>Previous</Button>
      <Button variant="contained" color="primary"  size="large" className="btn btn-primary">Download documents</Button>
    </div>
    </form>
  );
};

export default Upload;
