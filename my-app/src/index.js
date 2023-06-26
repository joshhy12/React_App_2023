import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Add any necessary styles or CSS files
import Layout from './pages/Layout'; // Import the Layout component

ReactDOM.render(
  <React.StrictMode>
    <Layout /> {/* Render the Layout component */}
  </React.StrictMode>,
  document.getElementById('root')
);
