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


// import React from 'react'
// import {
//   Nav,
//   NavItem,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu} from 'reactstrap';

  

// let NormalLink = ({to, children, ...options}) => (
//   <a href={to} {...options}>
//     {children}
//   </a>
// )

// let Link = ({to, children, link, ...options}) => {
//   let LinkComponent = link ? link : NormalLink
//   return <LinkComponent link={link} to={to} children={children} {...options}/>
// }

// let Item = ({url, name, children, link, ...options}) => (
//   <NavItem>
//     <Link
//       to={url}
//       className="nav-link"
//       link={link}
//       {...options}
//     >
//       {name ? name : children}
//     </Link>
//   </NavItem>
// )

// let DropdownItem = ({name, url, children, link, ...options}) => (
//   <Link to={url} link={link} className="dropdown-item" {...options}>
//     {name ? name : children}
//   </Link>
// )

// let Dropdown = ({dropdownItems, name, link, ...options}) => (
//   <UncontrolledDropdown nav inNavbar>
//     <DropdownToggle nav caret>
//       {name}
//     </DropdownToggle>
//     <DropdownMenu right>
//       {dropdownItems.map((item, i) => (
//         <DropdownItem {...item} link={link} key={i} {...options}/>
//       ))}
//     </DropdownMenu>
//   </UncontrolledDropdown>
// )

// let JsonNav = ({json, link, className="ml-auto", ...options}) => (
//      json = [
//         {
//             "name": "HOME",
//             "url": "/"
//         },
//         {
//           "name": "ADMIT PATIENT",
//           "url": "/patient"
//         },
//         {
//           "name": "BANK FORM",
//           "url": "/bank"
//         },
//         {
//           "name": "GROUP FORM",
//           "url": "/group"
//         },
//         {
//           "name": "EVENTS",
//           "url": "/events"
//         },
//         {
//           "name": "GRAPH",
//           "children": [
//             {
//               "name": "BAR",
//               "url": "/graph"
//             },
//             {
//               "name": "PIE",
//               "url": "/graph"
//             },
//             {
//               "name": "COLUMN",
//               "url": "/graph"
//             }
//           ]
//         }
//       ],
//   <Nav className={className} navbar>
//     {json.map((nav, i) => {
//       let Component = nav.dropdownItems ? Dropdown : Item
//       return <Component {...nav} key={i} link={link} {...options}/>
//     })}
//   </Nav>
// )

// export default JsonNav
