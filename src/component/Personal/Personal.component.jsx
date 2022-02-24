import React from "react";
import { useState, useEffect } from "react";
import { Formik, Field, Form } from "formik";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./personal.style.scss";

const useStyles = makeStyles({
  Field: {
    marginTop: 20,
    marginBottom: 40,
    display: "flex",
  },
});

let Personal = (props) => {
  const classes = useStyles();
  const [dob, setDob] = useState(
    props.personalData.length > 0 ? props.personalData[0].date : null
  );
  const [fullName, setFullName] = useState(
    props.personalData.length > 0 ? props.personalData[0].full_name : ""
  );
  const [fatherName, setFatherName] = useState(
    props.personalData.length > 0 ? props.personalData[0].father_name : ""
  );
  const [mobile, setMobile] = useState(
    props.personalData.length > 0 ? props.personalData[0].mobile : ""
  );
  const [email, setEmail] = useState(
    props.personalData.length > 0 ? props.personalData[0].email : ""
  );
  const [currentAddress, setCurrentAddress] = useState(
    props.personalData.length > 0 ? props.personalData[0].currentAddress : ""
  );
  const [permanentAddress, setPermanentAddress] = useState(
    props.personalData.length > 0 ? props.personalData[0].permanentAddress : ""
  );
  const [emergencyName, setemergencyName] = useState(
    props.personalData.length > 0 ? props.personalData[0].emergencyName : ""
  );
  const [emergencyRelation, setemergencyRelation] = useState(
    props.personalData.length > 0 ? props.personalData[0].emergencyRelation : ""
  );
  const [emergencyContact, setemergencyContact] = useState(
    props.personalData.length > 0 ? props.personalData[0].emergencyContact : ""
  );
  const [isValidated, setValidation] = useState(true);
  const [count, setCount] = useState([0]);
  const [nameError, setNameError] = useState(false);
  const [fatherNameError, setFatherNameError] = useState(false);
  const [mobileError, setMobileError] = useState(false);
  const [dateError, setDateError] = useState(false);

  useEffect(() => {
    // console.log("on Mount");
    console.log(props);
  }, []);

  const handleInput = (event) => {
    // console.log(event.target.id);
    if (event.target !== undefined) {
      switch (event.target.id) {
        case "fullName":
          setFullName(event.target.value);
          break;
        case "fatherName":
          setFatherName(event.target.value);
          break;
        case "mobile":
          setMobile(event.target.value);
          break;
        case "email":
          setEmail(event.target.value);
          break;
        case "dob":
          setDob(event.target.value);
          break;
        case "currentAddress":
          setCurrentAddress(event.target.value);
          break;
        case "permanentAddress":
          setPermanentAddress(event.target.value);
          break;
        case "emergencyName":
          setemergencyName(event.target.value);
          break;
        case "emergencyRelation":
          setemergencyRelation(event.target.value);
          break;
        case "emergencyContact":
          setemergencyContact(event.target.value);
          break;
        default:
          console.log("default");
      }
    }
  };
  let alertMsg, msgHelp;
  const validateData = (event) => {
    const validRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const mobRegex = /^\d{10}$/;
    event.preventDefault();
    setNameError(false);
    if (!fullName.trim().length > 0) {
      setNameError(true);
      console.log("fullname" + fullName.length);
      document.querySelector("#fullName").focus();
      return false;
    }
    if (!fatherName.trim().length > 0) {
      setFatherNameError(true);
      document.querySelector("#fatherName").focus();
      return false;
    }
    if (!mobile.trim().length > 0) {
      setMobileError(true);
      document.querySelector("#mobile").focus();
      return false;
    } else if (!mobRegex.test(mobile)) {
      setMobileError(true);
      document.querySelector("#mobile").focus();
      return false;
    }
    if (dob.length > 0) {
      setDateError(true);
      document.querySelector("#mobile").focus();
    }
    let obj = {
      full_name: fullName.trim(),
      father_name: fatherName.trim(),
      mobile: mobile.trim(),
      email: email.trim(),
      date: dob,
      currentAddress: currentAddress.trim(),
      permanentAddress: permanentAddress.trim(),
      emergencyName: emergencyName.trim(),
      emergencyRelation: emergencyRelation.trim(),
      emergencyContact: emergencyContact.trim(),
    };

    props.personalDataAttributes(obj);
    console.log(props.personalDataAttributes(obj));
    props.handleNextNavigation();
  };

  return (
    <form className="personal card" autoComplete="off">
      <Typography variant="h1" align="center" component="h2" className="title">
        PERSONAL DETAILS
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container rowSpacing={1} columnSpacing={3}>
          <Grid item xs={6}>
            <TextField
              label="Full Name"
              variant="outlined"
              required
              error={nameError}
              id="fullName"
              className={classes.Field}
              onChange={(event) => handleInput(event)}
              {...(nameError ? { helperText: "some value" } : {})}
              defaultValue={
                props.personalData.length > 0
                  ? props.personalData[0].full_name
                  : ""
              }
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Father's Name"
              variant="outlined"
              required
              error={fatherNameError}
              {...(fatherNameError ? { helperText: "some value" } : {})}
              id="fatherName"
              className={classes.Field}
              onChange={(event) => handleInput(event)}
              defaultValue={
                props.personalData.length > 0
                  ? props.personalData[0].father_name
                  : ""
              }
            />
          </Grid>
        </Grid>
        <Grid container rowSpacing={1} columnSpacing={3}>
          <Grid item xs={6}>
            <TextField
              label="Mobile"
              variant="outlined"
              required
              error={mobileError}
              {...(mobileError
                ? { helperText: "Enter valid mobile number" }
                : {})}
              id="mobile"
              className={classes.Field}
              onChange={(event) => handleInput(event)}
              maxLength={10}
              defaultValue={
                props.personalData.length > 0
                  ? props.personalData[0].mobile
                  : ""
              }
            />
          </Grid>
          <Grid item xs={6}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                required
                id="date"
                label="Date of birth"
                error={dateError}
                {...(dateError ? { helperText: "Enter valid DOB" } : {})}
                maxDate={new Date()}
                value={dob}
                onChange={(event) => {
                  handleInput(event);
                  setDob(event);
                  console.log(event);
                }}
                renderInput={(params) => (
                  <TextField
                    className={classes.Field}
                    variant="outlined"
                    {...params}
                  />
                )}
              />
            </LocalizationProvider>
          </Grid>
        </Grid>
        <TextField
          label="Email id"
          variant="outlined"
          required
          type="email"
          id="email"
          className={classes.Field}
          onChange={(event) => handleInput(event)}
          defaultValue={
            props.personalData.length > 0 ? props.personalData[0].email : ""
          }
        />
        <TextField
          label="Correspondence Address"
          variant="outlined"
          required
          multiline
          minRows={4}
          id="currentAddress"
          className={classes.Field}
          onChange={(event) => handleInput(event)}
          defaultValue={
            props.personalData.length > 0
              ? props.personalData[0].currentAddress
              : ""
          }
        />
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Same as Correspondence Address"
          />
        </FormGroup>
        <TextField
          label="Permanent Address"
          variant="outlined"
          required
          multiline
          minRows={4}
          id="permanentAddress"
          className={classes.Field}
          onChange={(event) => handleInput(event)}
          defaultValue={
            props.personalData.length > 0
              ? props.personalData[0].permanentAddress
              : ""
          }
        />

        <Typography
          variant="h3"
          align="center"
          component="h3"
          className="sub-title"
        >
          Emergency Contact Details
        </Typography>
        <Grid container rowSpacing={1} columnSpacing={3}>
          <Grid item xs={6}>
            <TextField
              label="Full Name"
              variant="outlined"
              required
              id="emergencyName"
              className={classes.Field}
              onChange={(event) => handleInput(event)}
              defaultValue={
                props.personalData.length > 0
                  ? props.personalData[0].emergencyName
                  : ""
              }
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Relation"
              variant="outlined"
              required
              id="emergencyRelation"
              className={classes.Field}
              onChange={(event) => handleInput(event)}
              defaultValue={
                props.personalData.length > 0
                  ? props.personalData[0].emergencyRelation
                  : ""
              }
            />
          </Grid>
        </Grid>
        <TextField
          label="Mobile"
          variant="outlined"
          required
          id="emergencyContact"
          className={classes.Field}
          maxLength={10}
          onChange={(event) => handleInput(event)}
          defaultValue={
            props.personalData.length > 0
              ? props.personalData[0].emergencyContact
              : ""
          }
        />
      </Box>
      <div className="container-btn">
        <Button
          variant="contained"
          color="primary"
          size="large"
          endIcon={<KeyboardArrowRightIcon />}
          type="submit"
          id="PersonalBtn"
          onClick={validateData}
        >
          Add Family Details
        </Button>
      </div>
    </form>
  );
};

export default Personal;
