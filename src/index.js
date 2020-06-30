import React from "react";
import ReactDOM from "react-dom";
import Form from "@rjsf/core";
import "./index.css";
import App from "./App";
import Navigation from "reactstrap-json-nav";
import { JsonToTable } from "react-json-to-table";
import Grid from "react-json-grid";
import * as serviceWorker from "./serviceWorker";

var schema = require("./schema.json");
var uiSchema = require("./uiSchema.json");

let json = [
  { name: "Nav List", url: "/components/" },
  { name: "Nav Item 1", url: "/components/" },
  { name: "Nav Item 2", url: "https://github.com/reactstrap/reactstrap" },
  { name: "Nav Item 3", url: "https://github.com/reactstrap/reactstrap" }
];

let items = [
  { name: "Louise", age: 27, color: "red" },
  { name: "Margaret", age: 15, color: "blue" },
  { name: "Lisa", age: 34, color: "yellow" }
];

let data = [
  { column1: 5, column2: 5, column3: 6, column4: 8, column5: 90 },
  { column1: 3, column2: 5, column3: 6, column4: 8, column5: 90 },
  { column1: 2, column2: 5, column3: 6, column4: 8, column5: 90 },
  { column1: 4, column2: 5, column3: 6, column4: 8, column5: 90 },
  { column1: 1, column2: 5, column3: 6, column4: 8, column5: 90 }
];

const log = type => console.log.bind(console, type);

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Navigation json={json} bg="light" navbar-expand="lg" navbar-expand-lg />
    <JsonToTable json={items} /> <hr></hr>
    <Grid data={data} />
    <hr></hr>
    <Form
      schema={schema}
      uiSchema={uiSchema}
      onChange={log("changed")}
      onSubmit={log("submitted")}
      onError={log("errors")}
    />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
