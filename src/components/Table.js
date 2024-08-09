import React from 'react';
import { Table as BootstrapTable } from 'react-bootstrap';

function Table({ data }) {
  const tableStyles = {
    width: '100%',
    maxWidth: '600px',  
    height: '400px',     
    margin: '65px auto',    
    overflowY: 'auto',  
  };

  const cellStyles = {
    textAlign: 'center',  
  };
  const HeadStyles = {
    backgroundColor:'#0056b3',  
   textAlign: 'center', 
   color:'#fff'
 
  };

  return (
    <div style={tableStyles}>
      <BootstrapTable  bordered hover>
        <thead>
          <tr>
            <th style={HeadStyles}>ID</th>
            <th style={HeadStyles}>YEAR</th>
            <th style={HeadStyles}>MEDALS</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.Id}>
              <td style={cellStyles}>{item.Id}</td>
              <td style={cellStyles}>{item.Year}</td>
              <td style={cellStyles}>{item.Medals}</td>
            </tr>
          ))}
        </tbody>
      </BootstrapTable>
    </div>
  );
}

export default Table;
