import React from 'react';
import { Button } from 'react-bootstrap';
import './Toggle.css';  // Import custom CSS

function Toggle({ view, setView }) {
  return (
    <div className="toggle-container">
      <Button 
        variant="link"
        className={view === 'table' ? 'active' : ''}
        onClick={() => setView('table')}
      >
        Table
      </Button>
      <Button 
        variant="link"
        className={view === 'chart' ? 'active' : ''}
        onClick={() => setView('chart')}
      >
        Chart
      </Button>
    </div>
  );
}

export default Toggle;
