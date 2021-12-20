import React from "react";
import Form from "./component/Form/Form.component";
// import FileUpload from './component/FileIpload/FileUpload';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {
  return (
    <div className="container-fluid">
      <h1 className="formHeading">Employee Joining Form</h1>
      <Form />
    </div>
  );
}

export default App;
