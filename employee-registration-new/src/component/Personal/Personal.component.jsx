import React from "react";
import { Formik, Field, Form } from "formik";
import "./personal.style.scss";

let Personal = () => {
  return (
    <div className="personal card">
      <h2 className="title">PERSONAL DETAILS</h2>
      <div class="mb-3 input-container">
        <label for="fullName" className="form-label">
          Full Name
        </label>
        <input
          type="text"
          className="form-control"
          id="fullName"
          aria-describedby="fullNameHelp"
        />
      </div>
      <div class="mb-3 input-container">
        <label for="fatherName" className="form-label">
          Father's Name
        </label>
        <input
          type="text"
          className="form-control"
          id="fatherName"
          aria-describedby="fatherNameHelp"
        />
      </div>
      <div class="mb-3 input-container">
        <label for="mobile" className="form-label">
          Mobile
        </label>
        <input
          type="number"
          className="form-control"
          id="mobile"
          aria-describedby="mobileHelp"
        />
      </div>
      <div class="mb-3 input-container">
        <label for="email" className="form-label">
          Email Id:
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3 input-container">
        <label for="dob" className="form-label">
          Date of Birth:
        </label>
        <input
          type="date"
          className="form-control"
          id="date"
          aria-describedby="dateHelp"
        />
      </div>
      <div class="mb-3 input-container">
        <label for="currentAddress" className="form-label">
          Correspondence Address:{" "}
        </label>
        <textarea
          type="text"
          className="form-control"
          id="currentAddress"
          aria-describedby="currentAddressHelp"
        />
      </div>
      <div class="mb-3 input-container">
        <label for="permanentAddress" className="form-label">
          Permanent Address:{" "}
        </label>
        <textarea
          type="text"
          className="form-control"
          id="permanentAddress"
          aria-describedby="permanentAddressHelp"
        />
      </div>
      <div class="mb-3 input-container">
        <label for="pan" className="form-label">
          PAN number
        </label>
        <input
          type="text"
          className="form-control"
          id="pan"
          aria-describedby="panHelp"
        />
      </div>
      <button type="submit" className="btn btn-primary btn-next" id="next">
        Next
      </button>
    </div>
  );
};

export default Personal;
