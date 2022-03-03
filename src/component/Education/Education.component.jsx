import React from "react";
import { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from '@mui/material/TextField';
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { makeStyles } from "@material-ui/core";
import "./Education.style.scss";

export default function Education(props) {
  const degrees = [
    { label: "PUC" },
    { label: "Graduate" },
    { label: "Post-graduate" },
    { label: "Ph.D" },
  ];
  const [degree, setdegree] = useState(
    props.educationData.length > 0 ? props.educationData[0].degree : ""
  );
  const [university, setuniversity] = useState(
    props.educationData.length > 0 ? props.educationData[0].university : ""
  );
  const [fromdate, setfromdate] = useState(
    props.educationData.length > 0 ? props.educationData[0].fromdate : ""
  );
  const [todate, settodate] = useState(
    props.educationData.length > 0 ? props.educationData[0].todate : ""
  );
  const [specialization, setspecialization] = useState(
    props.educationData.length > 0 ? props.educationData[0].specialization : ""
  );
  useEffect(() => {
    console.log(props);
  }, []);
  const handleInput = (event) => {
    console.log(event.target.id);
    if (event.target !== undefined) {
      switch (event.target.id) {
        case "degree":
          setdegree(event.target.value);
          break;
        case "university":
          setuniversity(event.target.value);
          break;
        case "fromdate":
          setfromdate(event.target.value);
          break;
        case "todate":
          settodate(event.target.value);
          break;
        case "specialization":
          setspecialization(event.target.value);
          break;

        default:
          console.log("default");
      }
    }
  };

  let alertMsg, msgHelp;
  const validateData = (event) => {
    event.preventDefault();
    debugger;
    // if (!degree.trim().length > 0) {
    //   console.log("degree" + degree.length);
    //   document.querySelector("#degree").focus();
    //   return false;
    // }
    if (!university.trim().length > 0) {
      console.log("university" + university.length);
      document.querySelector("#university").focus();
      return false;
    }
    if (!fromdate.trim().length > 0) {
      console.log("fromdate" + fromdate.length);
      document.querySelector("#fromdate").focus();
      return false;
    }
    if (!todate.trim().length > 0) {
      console.log("todate" + todate.length);
      document.querySelector("#todate").focus();
      return false;
    }
    if (!specialization.trim().length > 0) {
      console.log("specialization" + specialization.length);
      document.querySelector("#specialization").focus();
      return false;
    }
    let eduObj = {
      degree: degree.trim(),
      university: university.trim(),
      fromdate: fromdate.trim(),
      todate: todate.trim(),
      specialization: specialization.trim(),
    };
    props.educationData(eduObj);
    props.handleNextNavigation();
    return true;
  };

  return (
    <form className="education card">
      <Typography variant="h1" align="center" component="h2" className="title">
        EDUCATIONAL DETAILS
      </Typography>
      <div className="card-primary">
        <Autocomplete
          disablePortal
          labelId="degreeLabel"
          id="degree"
          label="Degree"
          className="edustyle"
          // onChange={(event) => handleInput(event)}
          // value={
          //   props.educationData.length > 0 ? props.educationData[0].degree : ""
          // }
          required
          options={degrees}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Degree" variant="outlined" />}
        />
        <TextField
          label="University/Institute"
          variant="outlined"
          required
          id="university"
          className="edustyle"
          onChange={(event) => handleInput(event)}
          defaultValue={
            props.educationData.length > 0
              ? props.educationData[0].university
              : ""
          }
        />
        <TextField
          label="From date"
          variant="outlined"
          required
          id="fromdate"
          className="edustyle"
          onChange={(event) => handleInput(event)}
          defaultValue={
            props.educationData.length > 0
              ? props.educationData[0].fromdate
              : ""
          }
        />
        <TextField
          label="To date"
          variant="outlined"
          required
          id="todate"
          className="edustyle"
          onChange={(event) => handleInput(event)}
          defaultValue={
            props.educationData.length > 0 ? props.educationData[0].todate : ""
          }
        />
        <TextField
          label="Specialization"
          variant="outlined"
          required
          id="specialization"
          className="edustyle"
          onChange={(event) => handleInput(event)}
          defaultValue={
            props.educationData.length > 0
              ? props.educationData[0].specialization
              : ""
          }
        />
      </div>
      <div className="container-btn">
        <Button
          variant="contained"
          color="primary"
          size="large"
          className="btn btn-primary"
          onClick={props.handlePrevNavigation}
          startIcon={<KeyboardArrowLeftIcon />}
        >
          Previous
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className="btn btn-primary"
          onClick={validateData}
          endIcon={<KeyboardArrowRightIcon />}
        >
          Add Employee Details
        </Button>
      </div>
    </form>
  );
}
