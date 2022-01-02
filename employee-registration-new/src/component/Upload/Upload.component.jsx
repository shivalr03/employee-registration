import React from "react";
import {useState} from 'react';
import { Formik, Field, Form } from "formik";
import "./upload.style.scss";

const Upload = (props) => {
  return (
    <form className="upload card">
      <h2 className="title">Upload DETAILS</h2>
      <div className="mb-3 input-container">
        <label htmlFor="adhaarCard" className="form-label">
          Adhaar Card
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
          Pan Card
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
          Education Certificate
        </label>
        <input
          type="file"
          className="form-control"
          id="eduCertificate"
          aria-describedby="eduCertificateHelp"
          // onChange={event => handleInput(event)}
        />
      </div>
      <div className="container-btn">
      <button className="btn btn-primary" onClick={props.handlePrevNavigation}>Previous</button>
      <button className="btn btn-primary">Submit</button>
    </div>
    </form>
  );
};

export default Upload;
