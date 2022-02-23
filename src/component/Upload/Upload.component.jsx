import React from "react";
import {useState} from 'react';
import { Formik, Field, Form } from "formik";
import  Typography from '@material-ui/core/Typography';
import  Button from '@material-ui/core/Button';
import "./upload.style.scss";

const Upload = (props) => {
  let fileChoosen = document.getElementById('file-chosen');
  function addFileName(e){
    // console.log('test');
    fileChoosen.innerHTML = e.target.files[0].name;
  }
  return (
    <form className="upload card">
      <Typography variant="h1" align='center' component="h2" className="title">Upload DETAILS</Typography>
      <div className="mb-3 input-container">
        <label htmlFor="adhaarCard" className="form-label">
         <span> Adhaar Card<i className="star">*</i></span><span> <i className="uploadBtn">Upload</i> <span id="file-chosen"></span></span>
        </label>
        <input
          type="file"
          className="form-control actual-btn"
          id="adhaarCard"
          aria-describedby="adhaarCardHelp"
          hidden
          onChange={addFileName}
          // onChange={event => handleInput(event)}
        />
      </div>
      <div className="mb-3 input-container">
        <label htmlFor="panCard" className="form-label">
         <span> Pan Card<i className="star">*</i></span><i className="uploadBtn">Upload</i>
        </label>
        <input
          type="file"
          className="form-control"
          id="panCard"
          aria-describedby="panCardHelp"
          hidden
          // onChange={event => handleInput(event)}
        />
      </div>
      <div className="mb-3 input-container">
        <label htmlFor="eduCertificate" className="form-label">
          <span>Education Certificate<i className="star">*</i></span><i className="uploadBtn">Upload</i>
        </label>
        <input
          type="file"
          className="form-control"
          id="eduCertificate"
          aria-describedby="eduCertificateHelp"
          hidden
          multiple
          // onChange={event => handleInput(event)}
        />
      </div>
      <div className="mb-3 input-container">
        <label htmlFor="expLetter" className="form-label">
         <span> Experience Letter <i className="star">*</i></span> <i className="uploadBtn">Upload</i>
        </label>
        <input
          type="file"
          className="form-control"
          id="expLetter"
          aria-describedby="expLetterHelp"
          hidden
          multiple
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
