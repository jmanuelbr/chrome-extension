/* global $, chrome, window, document, XMLHttpRequest */

import $ from 'jquery';
import * as CONSTANTS from './constants';

require('../scss/global.scss');

import React from 'react';
import ReactDOM from "react-dom";

import App from './components/app.component';


// ******************************************************************
//  Responsive hide logic
// ******************************************************************

window.onresize = function() {
    if ($(window).width() < CONSTANTS.MIN_VIEWPORT_WIDTH) {
        $("#parent-container").hide();
    } else {
        $("#parent-container").show();
    }
};

// ******************************************************************
//  Tabs
// ******************************************************************

$(document).ready(function() {
    $('head').append(`
        <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,700" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.9/css/weather-icons.css" />
        <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Dosis:400,300,700" />
        `);
    $(".tabs-menu a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        const tab = $(this).attr("href");
        $(".tab-content").not(tab).css("display", "none");
        $(tab).fadeIn();
    });
});

// ******************************************************************
//  Parent container
// ******************************************************************

const parentDiv = 
    '<div class="parent-widget-container" id="parent-container">' +
    '<div id="chromeApp" class="chrome-app"></div>' +
    '</div>';
$('body').append(parentDiv);

ReactDOM.render(<App />, document.getElementById("chromeApp"));
