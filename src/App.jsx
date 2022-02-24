import React, { Component } from 'react';
import kyssLogo from './kyssLogo.png';
import Form from "./component/Form/Form.component";
import Stepper from 'react-js-stepper';
import  Typography from '@material-ui/core/Typography';
// import FileUpload from './component/FileIpload/FileUpload';
import { createTheme, ThemeProvider } from '@material-ui/core';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import {green, deepOrange, teal } from '@material-ui/core/colors';
import { lightGreen } from '@mui/material/colors';

const theme = createTheme({
  palette:{
    primary:teal
  },
  typography:{
    fontFamily: 'Quicksand',
    fontWeightLight:400,
    fontWeightRegular:500,
    fontWeightMedium:600,
    fontWeightBold:700    
  }
})
// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <form />
//       </div>
//     )
//   }
// }

function App() {
  return (
    <ThemeProvider theme={theme}>
    <nav>
      <a href="/">
        <img className='brandLogo' src={kyssLogo} alt="" />
      </a>
    </nav>
    <div className="container-fluid">
      <Typography variant="h1" align='center' className="formHeading">Employee Joining Form</Typography>
      <Form />
      </div>
    </ThemeProvider>
  );
}

export default App;
