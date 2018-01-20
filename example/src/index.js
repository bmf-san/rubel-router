import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import registerServiceWorker from './registerServiceWorker';
import Route from 'rubel-router';

console.log(App);
ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
