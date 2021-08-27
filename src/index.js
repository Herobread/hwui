import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as parser from './Parser';

ReactDOM.render(
  <React.StrictMode>
    <App descArray={[]} />
  </React.StrictMode>,
  document.getElementById('root')
);

const url = "https://nodejsclusters-44722-0.cloudclusters.net/homework/week";
parser.parseData(url);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
