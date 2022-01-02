import React, { Component } from 'react';
import Form from "./component/Form/Form.component";
import Stepper from 'react-js-stepper';
// import FileUpload from './component/FileIpload/FileUpload';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";


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
    <div className="container-fluid">
      <h1 className="formHeading">Employee Joining Form</h1>
      <Form />
    </div>
  );
}

export default App;
