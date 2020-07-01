import React from 'react';
import {Bar} from 'react-chartjs-2';
import Header from './Header';

const data = {
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

export default class Graph extends React.Component{
//   displayName: 'BarExample',

  render() {
    return (
     
      <div className="main-panel">
        <h2>Bar Example (custom size)</h2>
        <Bar
          data={data}
          width={100}
          height={20}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
  }
};
