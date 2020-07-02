import React, {Component} from 'react';
import Navigation from "reactstrap-json-nav";
import "./Layout.css";
import { Row , Col } from 'react-bootstrap';
import Form from "@rjsf/core";
let json = [
    { name: "HOME", url: "/" },
    { name: "ADMIT PATIENT", url: "/graph" },
    { name: "MANAGE PATIENT", url: "https://github.com/reactstrap/reactstrap" },
    { name: "DISCHARGE", url: "https://github.com/reactstrap/reactstrap" },
    { name: "GENERATE REPORT", url: "https://github.com/reactstrap/reactstrap" },
  ];
  const log = (type) => console.log.bind(console, type);
export default class Header extends Component {
    render(){
        return (
        <header id="header" class="header">
            <div class="header-menu">
            <Row>
                <Col>
                   <Navigation className="horizontal-navbar" json={json} bg="light" navbar-expand="lg" navbar-expand-lg />
                </Col>
            </Row>
            </div>

        </header>

        )
    }
}