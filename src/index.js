import React from 'react';
import ReactDOM from 'react-dom/client';
import Rotas from './Routes';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode style={{ margin: 0, padding: 0 }}>
    <Rotas />
  </React.StrictMode>
);