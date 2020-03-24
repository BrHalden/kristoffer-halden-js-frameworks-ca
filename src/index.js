import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import {API_URL} from './imports/api.js'

console.log(API_URL)
ReactDOM.render(<App />, document.getElementById('root'));

