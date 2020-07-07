import React, { Component } from "react";
import Navigation from "reactstrap-json-nav";
import "./Layout.css";
import { Row , Col } from 'react-bootstrap';
import ReactNestedMenu from './ReactNestedMenu';
import menu from './test-data/menu';


// let json = [
//     { name: "HOME", url: "/" },
//     { name: "ADMIT PATIENT", url: "/patient" },
//     { name: "BANK FORM", url: "/bank" },
//     { name: "GRAPH", url: "/graph" },
//   ];
//   const log = (type) => console.log.bind(console, type);
export default class Sidebar extends Component {
    constructor() {
        super();
        this.state = { menu: menu };
        
    }
    render(){
        return (
            // <div className="navbar-right">
            // <Navigation className="vertical-navbar" json={json} bg="light" navbar-expand="lg" navbar-expand-lg />
             
            // </div>
            <div className="navbar-right">
                 <div className="vertical-navbar">
                 <ReactNestedMenu
                    navParentClassname="vertical menu nested"
                    navTopLevelParentClassname="vertical menu"
                    menuData={this.state.menu}/>
                </div>
            </div> 

        )
    }
}
