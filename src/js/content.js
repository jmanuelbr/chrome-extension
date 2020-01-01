/* global chrome, window, document, XMLHttpRequest */
require('../scss/global.scss');
import * as CONSTANTS from './constants';
import React from 'react';
import ReactDOM from "react-dom";
import App from './components/app.component';
import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';

// ******************************************************************
//  Responsive hide logic
// ******************************************************************

window.onresize = function() {
    const app = document.getElementById("chromeApp");   
    if (document.body.clientWidth < CONSTANTS.MIN_VIEWPORT_WIDTH) {
        app.style.display = 'none';
    } else {
        app.style.display = 'block';
    }
};

// ******************************************************************
//  Parent container
// ******************************************************************

function ready(callback) {
    // in case the document is already rendered
    if (document.readyState!='loading') callback();
    else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
}

ready(function(){
    document.head.innerHTML += `<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,700" />`;
    document.head.innerHTML += `<link rel="stylesheet" href="//cdn.jsdelivr.net/chartist.js/latest/chartist.min.css">`;
});

const appContainter = 
    '<div id="chromeApp" class="parent-widget-container">' +
    '</div>';
document.body.innerHTML += appContainter;



// ******************************************************************
// Redux Store
// ******************************************************************
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(reduxThunk))
);
chrome.storage.sync.get(null, function(chromeStorage) {
    store.chromeStorage = chromeStorage;
    ReactDOM.render(
    <App store={store}/>, document.getElementById("chromeApp"));
});


