import React from 'react';
import {Bar,Pie} from 'react-chartjs-2';
import Header from './Header';
import { Row , Col } from 'react-bootstrap';
const Bardata = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

const Piedata = {
	labels: [
		'Red',
		'Blue',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

export default class Graph extends React.Component{
//   displayName: 'BarExample',

  render() {
    return (
     
      <div className="main-panel mgtop50">
        <Row>
          <Col>
          <Bar
          data={Bardata}
          width={100}
          height={20}
          options={{
            maintainAspectRatio: false
          }}
        />
          </Col>
          <Col>
           <Pie data={Piedata} />
          </Col>
        </Row>
       
      </div>
    );
  }
};
