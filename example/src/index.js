import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import registerServiceWorker from './registerServiceWorker';
import {Router} from 'rubel-router';

console.log(Router);
ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
