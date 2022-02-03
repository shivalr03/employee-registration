import React from "react";
import {useState} from 'react';
import { Formik, Field, Form } from "formik";
import  Typography from '@material-ui/core/Typography';
import  Button from '@material-ui/core/Button';
import "./upload.style.scss";

const Upload = (props) => {
  return (
    <form className="upload card">
      <Typography variant="h1" align='center' component="h2" className="title">Upload DETAILS</Typography>
      <div className="mb-3 input-container">
        <label htmlFor="adhaarCard" className="form-label">
          Adhaar Card:
        </label>
        <input
          type="file"
          className="form-control"
          id="adhaarCard"
          aria-describedby="adhaarCardHelp"
          // onChange={event => handleInput(event)}
        />
      </div>
      <div className="mb-3 input-container">
        <label htmlFor="panCard" className="form-label">
          Pan Card:
        </label>
        <input
          type="file"
          className="form-control"
          id="panCard"
          aria-describedby="panCardHelp"
          // onChange={event => handleInput(event)}
        />
      </div>
      <div className="mb-3 input-container">
        <label htmlFor="eduCertificate" className="form-label">
          Education Certificate:
        </label>
        <input
          type="file"
          className="form-control"
          id="eduCertificate"
          aria-describedby="eduCertificateHelp"
          // onChange={event => handleInput(event)}
        />
      </div>
      <div className="mb-3 input-container">
        <label htmlFor="expLetter" className="form-label">
          Experience Letter:
        </label>
        <input
          type="file"
          className="form-control"
          id="expLetter"
          aria-describedby="expLetterHelp"
          // onChange={event => handleInput(event)}
        />
      </div>
      <div className="container-btn">
      <Button  variant="contained" color="primary"  size="large" className="btn btn-primary" onClick={props.handlePrevNavigation}>Previous</Button>
      <Button variant="contained" color="primary"  size="large" className="btn btn-primary">Submit</Button>
    </div>
    </form>
  );
};

export default Upload;
