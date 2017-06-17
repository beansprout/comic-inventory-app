import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const 
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
