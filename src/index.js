import React from "react";
import ReactDOM from "react-dom";
import Form from "@rjsf/core";
import { Row, Col } from "react-bootstrap";
import "./index.css";
import App from "./App";
import Navigation from "reactstrap-json-nav";
import { JsonToTable } from "react-json-to-table";
import BankFormScreen from "./bank-form-screen/BankFormScreen";
import Graph from './Bargraph';
import Layout from './Layout';
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from 'react-router-dom'


const log = type => console.log.bind(console, type);

ReactDOM.render(
  <BrowserRouter>
    <App />
    </BrowserRouter> ,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
