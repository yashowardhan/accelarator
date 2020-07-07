import React from "react";
import ReactDOM from "react-dom";
import Grid from "react-json-grid";
import Form from "@rjsf/core";
import "../index.css";

var patientSchema = require("./patientSchema.json");
var patientUiSchema = require("./patientUiSchema.json");

const log = (type) => console.log.bind(console, type);

export default class PatientFormScreen extends React.Component {
  render() {
    return (
      <div className="main-panel">
        <div className="form-bank">
          <Form
            className="form-style"
            schema={patientSchema}
            uiSchema={patientUiSchema}
          >
            {/* <Grid data={data}></Grid>
          <button>Submit</button> */}
          </Form>
        </div>
      </div>
    );
  }
}

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
