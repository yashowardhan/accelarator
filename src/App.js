import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MenuBar from "./sidebar-submenu";
import Navigation from "reactstrap-json-nav";
import { JsonToTable } from "react-json-to-table";
import Graph from "./Bargraph";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Layout from "./Layout";
import Sidebar from "./Sidebar";
import BankFormScreen from "./bank-form-screen/BankFormScreen";
import PatientFormScreen from "./patient-form-screen/PatientFormScreen";
import GroupForm from "./grouping-form/GroupingForm";
import EventsFormScreen from "./events-form-screen/EventsFormScreen";
var schema = require("./schema.json");
var uiSchema = require("./uiSchema.json");

let items = [
  { name: "Louise", age: 27, color: "red" },
  { name: "Margaret", age: 15, color: "blue" },
  { name: "Lisa", age: 34, color: "yellow" }
];

function App() {
  return (
    // <Navigation json={json} bg="light" navbar-expand="lg" navbar-expand-lg />
    <Router>
      {/* <Header /> */}
      {/* <Sidebar /> */}
      <div className="horizontal-menu">
        <MenuBar  />
      </div>
      <div className="vertical-menu">
        <MenuBar  />
      </div>
     <Switch>
        <Route exact path="/">
          <Layout />
        </Route>
        <Route path="/graph">
          <Graph />
        </Route>
        <Route path="/bank">
          <BankFormScreen />
        </Route>
        <Route path="/patient">
          <PatientFormScreen />
        </Route>
        <Route path="/group">
          <GroupForm />
        </Route>
        <Route path="/events">
          <EventsFormScreen />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
