import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Appweather from './components/Appweather/Appweather';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Appweather/>
  </React.StrictMode>
);

