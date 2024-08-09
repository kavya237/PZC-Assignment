import React, { useState } from 'react';
import data from './data.json';
import Table from './components/Table';
import Chart from './components/Chart';
import Toggle from './components/Toggle';
import { Container } from 'react-bootstrap';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [view, setView] = useState('table'); // default view

  return (
    <Container className="mt-5">
        <div className="Details">
        <h1 className="name"> Kavya Gouda</h1>
        <p className='m-0 mb-1'>
        <a href="mailto:iamkavyagouda@gmail.com" className="number">
        iamkavyagouda@gmail.com
        </a>
        </p>
        <p className='m-0 mb-1'>
        <a href="tel: 9014570176" className="number">
          9014570176
        </a>
        </p>
      </div>
     <div className="header">
        <h1 className="heading">Data Visualization Dashboard</h1>
        <p className="description">
          Welcome to the Data Visualization Dashboard! This interactive web application presents data from different years.
        </p>
      </div>

    
      <Toggle view={view} setView={setView} />
      <div className="mt-4">
        {view === 'table' ? <Table data={data} /> : <Chart data={data} />}
      </div>
    </Container>
  );
}

export default App;
