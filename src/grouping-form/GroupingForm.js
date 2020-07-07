import React from "react";
import Form from "@rjsf/core";
import "../index.css";

import { JsonForms } from "@jsonforms/react";
import {
  materialRenderers,
  materialCells
} from "@jsonforms/material-renderers";

var groupSchema = require("./groupSchema.json");
var groupUiSchema = require("./groupUiSchema.json");

const data = {
  comments: [
    {
      message: "This is an example message"
    },
    {
      name: "Max Mustermann",
      message: "Get ready for booohay"
    }
  ],
  lists: [
    {
      name: "John Doe",
      message: "This is an example message"
    },
    {
      name: "Max Mustermann",
      message: "Another message"
    }
  ]
};
export default class GroupingForm extends React.Component {
  render() {
    return (
      <div className="main-panel">
        <div className="form-grouping">
          <JsonForms
            schema={groupSchema}
            uischema={groupUiSchema}
            data={data}
            renderers={materialRenderers}
            cells={materialCells}
          ></JsonForms>
          <button className="submit">Submit</button>
        </div>
      </div>
    );
  }
}
