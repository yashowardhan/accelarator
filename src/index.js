import React from "react";
import ReactDOM from "react-dom";
import Form from "@rjsf/core";
import {Row,Col} from 'react-bootstrap'
import "./index.css";
import App from "./App";
import Navigation from "reactstrap-json-nav";
import { JsonToTable } from "react-json-to-table";
import Graph from './Bargraph';
import Layout from './Layout';

import * as serviceWorker from "./serviceWorker";

var schema = require("./schema.json");
var uiSchema = require("./uiSchema.json");

let json = [
  { name: "Nav List", url: "/graph/" },
  { name: "Nav Item 1", url: "/components/" },
  { name: "Nav Item 2", url: "https://github.com/reactstrap/reactstrap" },
  { name: "Nav Item 3", url: "https://github.com/reactstrap/reactstrap" },
];

let items = [
  { name: "Louise", age: 27, color: "red" },
  { name: "Margaret", age: 15, color: "blue" },
  { name: "Lisa", age: 34, color: "yellow" }
];

const log = (type) => console.log.bind(console, type);

ReactDOM.render(
 
  <React.Fragment>
   <App />
    {/* <Navigation json={json} bg="light" navbar-expand="lg" navbar-expand-lg />
  <Row>
    <Col xs={12} md={4}> 
    <Form className="form-style"
      schema={schema}
      uiSchema={uiSchema}
      onChange={log("changed")}
      onSubmit={log("submitted")}
      onError={log("errors")}
    />
    </Col>
    <Col xs={12} md={3}>
    <JsonToTable json={items} />{" "}
    </Col>
    <Col xs={12} md={5}>
    <Graph/>
    </Col>
  </Row> */}
  
  </React.Fragment>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
