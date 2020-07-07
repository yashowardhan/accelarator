import React from "react";
import ReactDOM from "react-dom";
import Form from "@rjsf/core";
import "./index.css";
import App from "./App";
import Navigation from "reactstrap-json-nav";
import * as serviceWorker from "./serviceWorker";

var schema = require("./schemaPaitient.json");
var uiSchema = require("./uiSchema.json");

let json = [
  { name: "Nav List", url: "/components/" },
  { name: "Nav Item 1", url: "/components/" },
  { name: "Nav Item 2", url: "https://github.com/reactstrap/reactstrap" },
  { name: "Nav Item 3", url: "https://github.com/reactstrap/reactstrap" },
];

const log = (type) => console.log.bind(console, type);

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Navigation json={json} bg="light" navbar-expand="lg" navbar-expand-lg />
    <Form
      schema={schema}
      uiSchema={uiSchema}
      onChange={log("changed")}
      onSubmit={log("submitted")}
      onError={log("errors")}
    >
      {" "}
      <div>
        <button type="submit">Submit</button>
        <button type="button">Cancel</button>
      </div>
    </Form>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
