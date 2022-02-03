import React from 'react';
import { useState, useEffect } from 'react';
import  Typography from '@material-ui/core/Typography';
import  Button from '@material-ui/core/Button';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { makeStyles } from "@material-ui/core";
import  TextField from '@material-ui/core/TextField';
import './Employee.style.scss';

const useStyles = makeStyles({
  Field:{
    marginTop:20,
    marginBottom:40,
    display: 'flex'
  }
})
export default function Employee(props) {

  const classes = useStyles()
const [orgName, setorgName] = useState(props.employeeData.length>0?props.employeeData[0].orgName:'');
const [jobRole, setjobRole] = useState(props.employeeData.length>0?props.employeeData[0].jobRole:'');
const [empFromdate, setempFromdate] = useState(props.employeeData.length>0?props.employeeData[0].empFromdate:'');
const [empTodate, setempTodate] = useState(props.employeeData.length>0?props.employeeData[0].empTodate:'');
const [ctc, setctc] = useState(props.employeeData.length>0?props.employeeData[0].ctc:'');

useEffect(() => {
  // console.log("on Mount");
  console.log(props);
}, []);

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
// let alertMsg, msgHelp;
const validateData = (event) => {
  event.preventDefault();
  // debugger;
  let employeeObj = {
    orgName: orgName.trim(),
    jobRole: jobRole.trim(),
    empFromdate: empFromdate.trim(),
    empTodate: empTodate.trim(),
    ctc: ctc.trim(),
  }
  
  // console.log("Your data:", obj);
  props.employeeDataAttributes(employeeObj);

  props.handleNextNavigation();

  return true;
}
  return (
    <form className="employee card">
      <Typography variant="h1" align='center' component="h2" className="title">EMPLOYMENT DETAILS</Typography>
      <div className="card-primary">
      <TextField  label="Organization name" variant="outlined" required 
      id="orgName" className={classes.Field}
      onChange={event => handleInput(event)}
      defaultValue={props.employeeData.length>0?props.employeeData[0].orgName:''}
      />
      <TextField  label="Job role" variant="outlined" required 
      id="jobRole" className={classes.Field}
      onChange={event => handleInput(event)}
      defaultValue={props.employeeData.length>0?props.employeeData[0].jobRole:''}
      />
      <TextField  label="From date" variant="outlined" required 
      id="empFromdate" className={classes.Field}
      onChange={event => handleInput(event)}
      defaultValue={props.employeeData.length>0?props.employeeData[0].empFromdate:''}
      />
      <TextField  label="To date" variant="outlined" required 
      id="empTodate" className={classes.Field}
      onChange={event => handleInput(event)}
      defaultValue={props.employeeData.length>0?props.employeeData[0].empTodate:''}
      />
      <TextField  label="CTC" variant="outlined" required 
      id="ctc" className={classes.Field}
      onChange={event => handleInput(event)}
      defaultValue={props.employeeData.length>0?props.employeeData[0].ctc:''}
      />
      </div>
      <div className="container-btn">
      <Button variant="contained" color="primary"  size="large" className="btn btn-primary" onClick={props.handlePrevNavigation} startIcon={<KeyboardArrowLeftIcon/>}>Previous</Button>
      <Button variant="contained" color="primary"  size="large" className="btn btn-primary" onClick={validateData} endIcon={<KeyboardArrowRightIcon/>}>Next</Button>
    </div>
    </form>
  )
}
