import React from "react";
import { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import "./Family.style.scss";

const useStyles = makeStyles({
  Field: {
    marginTop: 20,
    marginBottom: 40,
    display: "flex",
  },
});
export default function Family(props) {
  const classes = useStyles();
  const [familyFullName, setFamilyFullName] = useState(
    props.familyData.length > 0 ? props.familyData[0].familyFullName : ""
  );
  const [familyRelation, setfamilyRelation] = useState(
    props.familyData.length > 0 ? props.familyData[0].familyRelation : ""
  );
  const [familyOccupation, setFamilyOccupation] = useState(
    props.familyData.length > 0 ? props.familyData[0].familyOccupation : ""
  );
  const [familyDob, setFamilyDob] = useState(
    props.familyData.length > 0 ? props.familyData[0].familyDob : ""
  );
  const [component, setComponentRender] = useState([{ count: 0 }]);

  useEffect(() => {
    console.log(props);
  }, []);

  const incrementComponent = () => {
    let obj = { count: Math.random() };
    let arr = [...component, obj];
    setComponentRender(arr);
  };

  const handleInput = (event) => {
    console.log(event.target.id);
    if (event.target !== undefined) {
      switch (event.target.id) {
        case "familyFullName":
          setFamilyFullName(event.target.value);
          break;
        case "familyRelation":
          setfamilyRelation(event.target.value);
          break;
        case "familyOccupation":
          setFamilyOccupation(event.target.value);
          break;
        case "familyDob":
          setFamilyDob(event.target.value);
          break;
        default:
          console.log("default");
      }
    }
  };
  let alertMsg, msgHelp;
  const validateData = (event) => {
    event.preventDefault();
    if (!familyFullName.trim().length > 0) {
      console.log("familyFullName" + familyFullName.length);
      document.querySelector("#familyFullName").focus();
      return false;
    }
    if (!familyRelation.trim().length > 0) {
      console.log("familyRelation" + familyRelation.length);
      document.querySelector("#familyRelation").focus();
      return false;
    }
    if (!familyOccupation.trim().length > 0) {
      console.log("familyOccupation" + familyOccupation.length);
      document.querySelector("#familyOccupation").focus();
      return false;
    }
    if (!familyDob.trim().length > 0) {
      console.log("familyDob" + familyDob.length);
      document.querySelector("#familyDob").focus();
      return false;
    }
    let familyObj = {
      familyFullName: familyFullName.trim(),
      familyRelation: familyRelation.trim(),
      familyOccupation: familyOccupation.trim(),
      familyDob: familyDob.trim(),
    };
    props.familyDataAttributes(familyObj);

    props.handleNextNavigation();

    return true;
  };
  return (
    <form className="family card">
      <Typography variant="h1" align="center" component="h2" className="title">
        FAMILY DETAILS
      </Typography>
      <div className="card-primary">
        {component.map(() => {
          return (
            <div className="card-body">
              <TextField
                label="Full Name"
                variant="outlined"
                required
                id="familyFullName"
                className={classes.Field}
                onChange={(event) => handleInput(event)}
                defaultValue={
                  props.familyData.length > 0
                    ? props.familyData[0].familyFullName
                    : ""
                }
              />
              <TextField
                label="Relation"
                variant="outlined"
                required
                id="familyRelation"
                className={classes.Field}
                onChange={(event) => handleInput(event)}
                defaultValue={
                  props.familyData.length > 0
                    ? props.familyData[0].familyRelation
                    : ""
                }
              />

              <TextField
                label="Occupation"
                variant="outlined"
                required
                id="familyOccupation"
                className={classes.Field}
                onChange={(event) => handleInput(event)}
                defaultValue={
                  props.familyData.length > 0
                    ? props.familyData[0].familyOccupation
                    : ""
                }
              />
              <TextField
                label="Date of birth"
                variant="outlined"
                required
                id="familyDob"
                className={classes.Field}
                onChange={(event) => handleInput(event)}
                defaultValue={
                  props.familyData.length > 0
                    ? props.familyData[0].familyDob
                    : ""
                }
              />
            </div>
          );
        })}
      </div>
      <Button className="plusBtn" onClick={incrementComponent}>
        + Add more Members
      </Button>
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
          Add Education Details
        </Button>
      </div>
    </form>
  );
}
