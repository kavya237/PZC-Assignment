import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function Chart({ data }) {
  const chartData = {
    labels: data.map((item) => item.Year),
    datasets: [
      {
        label: 'Medals Won',
        data: data.map((item) => item.Medals),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        width:"700px",
        height:"400px"
      },
    ],
  };

  const chartStyles = {
    width: '100%',
    maxWidth: '600px',  
    height: '400px',     
    margin: '65px auto',    
  };

  return (
    <div style={chartStyles}>
      <Line data={chartData} />
    </div>
  );
}

export default Chart;
