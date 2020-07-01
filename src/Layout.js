import React from 'react'
import "./Layout.css";
import { Row , Col } from 'react-bootstrap';
import Form from "@rjsf/core";
import Header from './Header';

var schema = require("./schema.json");
var uiSchema = require("./uiSchema.json");


  const log = (type) => console.log.bind(console, type);
function Layout() {
    return (
        
        <div className="main-panel">      
            <Row>
             <Col sm={10} md={8}>
             <div className="form-section">
             <Form className="form-style"
                schema={schema}
                uiSchema={uiSchema}
                onChange={log("changed")}
                onSubmit={log("submitted")}
                onError={log("errors")}
                />
            </div>      
             </Col>
            </Row>         
        </div>
    )
}

export default Layout
