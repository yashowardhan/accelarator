import React from "react";
import ReactDOM from "react-dom";
import Grid from "react-json-grid";
import Form from "@rjsf/core";
import "../index.css";

var bankSchema = require("./bankSchema.json");
var bankUiSchema = require("./bankUiSchema.json");

let data = [{ Checking: 0, Savings: 1875, Deposits: 987 }];

const log = type => console.log.bind(console, type);

export default class BankFormScreen extends React.Component {
  render() {
    return (
      <div className="form-bank">
        <Form
          className="form-style"
          schema={bankSchema}
          uiSchema={bankUiSchema}
        >
          <Grid data={data}></Grid>
          <button>Submit</button>
        </Form>
      </div>
    );
  }
}

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

// import React from "react";
// import { JsonForms } from "@jsonforms/react";
// import { person } from "@jsonforms/examples";
// import {
//   materialRenderers,
//   materialCells
// } from "@jsonforms/material-renderers";

// // const schema = person.schema;
// // const uischema = person.uischema;
// // const data = person.data;

// // const schema = require("./bankSchema.json");
// // const uiSchema = require("./bankUiSchema.json");

// const schema = {
//   type: "object",
//   properties: {
//     name: {
//       type: "string",
//       minLength: 3,
//       description: "Please enter your name"
//     },
//     vegetarian: {
//       type: "boolean"
//     },
//     birthDate: {
//       type: "string",
//       format: "date"
//     },
//     nationality: {
//       type: "string",
//       enum: ["DE", "IT", "JP", "US", "RU", "Other"]
//     },
//     personalData: {
//       type: "object",
//       properties: {
//         age: {
//           type: "integer",
//           description: "Please enter your age."
//         },
//         height: {
//           type: "number"
//         },
//         drivingSkill: {
//           type: "number",
//           maximum: 10,
//           minimum: 1,
//           default: 7
//         }
//       },
//       required: ["age", "height"]
//     },
//     occupation: {
//       type: "string"
//     },
//     postalCode: {
//       type: "string",
//       maxLength: 5
//     }
//   },
//   required: ["occupation", "nationality"]
// };

// const uiSchema = {
//   type: "Group",
//   label: "My Group",
//   elements: [
//     {
//       type: "HorizontalLayout",
//       elements: [
//         {
//           type: "VerticalLayout",
//           elements: [
//             {
//               type: "Control",
//               label: "Name",
//               scope: "#/properties/name"
//             },
//             {
//               type: "Control",
//               label: "Birth Date",
//               scope: "#/properties/birthDate"
//             }
//           ]
//         },
//         {
//           type: "VerticalLayout",
//           elements: [
//             {
//               type: "Control",
//               label: "Name",
//               scope: "#/properties/name"
//             },
//             {
//               type: "Control",
//               label: "Birth Date",
//               scope: "#/properties/birthDate"
//             }
//           ]
//         }
//       ]
//     }
//   ]
// };

// function BankFormScreen() {
//   return (
//     <div>
//       <JsonForms
//         schema={schema}
//         uiSchema={uiSchema}
//         renderers={materialRenderers}
//         cells={materialCells}
//       />
//       {/* <JsonForms
//         schema={address}
//         // uischema={addressUISchema}
//         renderers={materialRenderers}
//       /> */}
//     </div>
//   );
// }
// export default BankFormScreen;
