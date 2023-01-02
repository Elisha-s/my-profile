import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from '../src/App.tsx';
// const App = require('./App.tsx')

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(App);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
