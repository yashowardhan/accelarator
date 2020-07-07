import React, { Component } from "react";
import Navigation from "reactstrap-json-nav";
import "./Layout.css";
import { Row, Col } from "react-bootstrap";
let json = [
  { name: "HOME", url: "/" },
  { name: "ADMIT PATIENT", url: "/patient" },
  { name: "BANK FORM", url: "/bank" },
  { name: "GRAPH", url: "/graph" },
  { name: "GROUP-FORM", url: "/group" }
];
const log = type => console.log.bind(console, type);
export default class Sidebar extends Component {
  render() {
    return (
      <div className="navbar-right">
        <Navigation
          className="vertical-navbar"
          json={json}
          bg="light"
          navbar-expand="lg"
          navbar-expand-lg
        />
      </div>
    );
  }
}
