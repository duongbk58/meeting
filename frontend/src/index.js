import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StrictMode} from 'react';
import "font-awesome/css/font-awesome.min.css";

// ✅ now importing from react-dom/client
import reportWebVitals from './reportWebVitals';

// import "bootstrap/dist/js/bootstrap.min.js";
import "./assets/css/bootstrap.min.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
