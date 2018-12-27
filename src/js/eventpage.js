/* global $, chrome, window, document, XMLHttpRequest */

import $ from 'jquery';
import * as CONSTANTS from './constants';
import { formattedDate, isRecentNews, findUrl, isNew } from './helper';
import { weatherHtml, weatherRequest } from './components/weather';

require('../scss/global.scss');

import React, { Component } from 'react';
import ReactDOM from "react-dom";

import CurrencyWidget from './components/currencyWidget';

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

const spinner = "'" + chrome.extension.getURL('assets/spinner.gif') + "'";


const parentDiv = 
    '<div class="parent-widget-container" id="parent-container">' +
    '<div id="chromeApp" class="chrome-app"></div>' +
    '<div class="news--container">' +
    '<div id="tab-container">' +
    '<ul class="tabs-menu">' +
    '<li class="current first--tab"><a href="#tab-1"><img class="img--tabs" src="' +
    chrome.extension.getURL('assets/bbc-news.png') + '"/></a></li>' +
    '<li><a href="#tab-2"><img class="img--tabs" src="' +
    chrome.extension.getURL('assets/theguardian.png') + '"/></a></li>' +
    '<li><a href="#tab-3"><img class="img--tabs" src="' +
    chrome.extension.getURL('assets/slashdot.png') + '"/></a></li>' +
    '<li><a href="#tab-4"><img class="img--tabs" src="' +
    chrome.extension.getURL('assets/science.png') + '"/></a></li>' +
    '<li class="last--tab"><a href="#tab-5"><img class="img--tabs" src="' +
    chrome.extension.getURL('assets/reddit.png') + '"/></a></li>' +
    '</ul>' +
    '</div>' +
    '<div class="tab">' +
    '<div id="tab-1" class="tab-content"></div>' +
    '<div id="tab-2" class="tab-content"></div>' +
    '<div id="tab-3" class="tab-content"></div>' +
    '<div id="tab-4" class="tab-content"></div>' +
    '<div id="tab-5" class="tab-content"></div>' +
    '</div>' +
    weatherHtml + '</div>' +
    '</div>';
$('body').append(parentDiv);


// ******************************************************************
//  BBC tab
// ******************************************************************

let bbcNews = '<div id="bbc-content" class="news--table" style="display:none"></div>' +
    '<div id="bbc-spinner" class="spinner" style="background-image: url(' + spinner + ');"></div>';
$('#tab-1').append(bbcNews);
const xhrBbc = new XMLHttpRequest();
xhrBbc.open("GET", CONSTANTS.BCC_NEWS_FEED, true);
xhrBbc.onreadystatechange = function() {
    if (xhrBbc.readyState == CONSTANTS.READY) {
        const data = xhrBbc.responseText;
        const todayNews = [];

        $('item', data).each(function(index, value) {

            const el = $(this);
            const date = new Date(el.find("pubDate").text());
            const mediaThumbnail = el.find("media\\:thumbnail")[0];
            let thumbnail;
            if (typeof mediaThumbnail !== 'undefined') {
                thumbnail = $(mediaThumbnail).attr('url');
                if (thumbnail.length > 0) {
                    thumbnail = thumbnail.replace('http', 'https');
                }
            }
            if (isRecentNews(date)) {
                todayNews.push({
                    "title": el.find('title').eq(0).text(),
                    "link": findUrl(el.text()),
                    "isNew": isNew(date),
                    "date": date,
                    "thumbnail": thumbnail
                });
            }
        });

        let bbcNews = "";
        if (todayNews.length === 0) {
            bbcNews = '<div class="extension--row news--row text--center">No news for today.</div>';
        } else {
            todayNews.forEach(function(entry) {
                bbcNews += '<a href="' + entry.link + '" target="_blank">' +
                    '<div class="extension--row news--row">' +
                    '<div class="extension--cell-news"><div class="img--container"><img class="thumbnail--img" src="' + entry.thumbnail + '"/></div>' +
                    ((entry.isNew) ? ('<div class="overlay" style="background-image: url(' + chrome.extension.getURL('assets/icon-updated.gif') + ');"></div>') : '') +
                    '<div class="title">' + entry.title.replace("<![CDATA[", "").replace("]]>", "") + '</div></div>' +
                    '<div class=news--hour>' + formattedDate(entry.date) + '</div>' +
                    '</div>' +
                    '</a>' +
                    '<hr class="news--row--separator">';
            });
        }

        $('#bbc-content').append(bbcNews);
        $('#bbc-spinner').hide();
        $('#bbc-content').show();
    }
};
xhrBbc.send();

// ******************************************************************
//  The Guardian Tab
// ******************************************************************

let theGuardianNews = '<div id="theguardian-content" class="news--table" style="display:none"></div>' +
    '<div id="theguardian-spinner" class="spinner" style="background-image: url(' + spinner + ');"></div>';
$('#tab-2').append(theGuardianNews);
const xhrTheGuardian = new XMLHttpRequest();
xhrTheGuardian.open("GET", CONSTANTS.THE_GUARDIAN_FEED, true);
xhrTheGuardian.onreadystatechange = function() {
    if (xhrTheGuardian.readyState == CONSTANTS.READY) {
        const data = xhrTheGuardian.responseText;
        const todayNews = [];

        $(data).find("item").each(function() {
            const el = $(this);
            const date = new Date(el.find("pubDate").text());

            if (isRecentNews(date)) {
                todayNews.push({
                    "title": el.find("title").text(),
                    "link": findUrl(el.text()),
                    "isNew": isNew(date),
                    "date": date
                });
            }
        });

        let allNews = "";
        todayNews.forEach(function(entry) {
            allNews += '<a href="' + entry.link + '" target="_blank">' +
                '<div class="extension--row news--row text-left">' +
                ((entry.isNew) ? ('<div class="extension--cell-news"><img class="is--new" src="' + chrome.extension.getURL('assets/recent.png') + '" height="16px"/></div>') : '') +
                '<div class="extension--cell-news">' + entry.title + '</div>' +
                '<div class=news--hour>' + formattedDate(entry.date) + '</div>' +
                '</div>' +
                '</a>' +
                '<hr class="news--row--separator">';
        });

        $('#theguardian-content').append(allNews);
        $('#theguardian-spinner').hide();
        $('#theguardian-content').show();
    }
};
xhrTheGuardian.send();

// ******************************************************************
//  Slashdot tab
// ******************************************************************

const getSlashdotIcon = function(element) {
    const array = element.text().split(/\n/);
    return 'https://a.fsdn.com/sd/topics/' + array[array.length - 2].replace(/\t/g, '').replace(/\W+\./g, "");
};

const formattedSlashdotDate = function(feedDate) {
    const arrayDate = feedDate.split(' ');
    let dateString = arrayDate[0];
    const hourString = arrayDate[1];
    const date = new Date(dateString);
    if (date.getDay() == TODAY.getDay() && date.getMonth() == TODAY.getMonth()) {
        dateString = "Today";
    }
    return dateString + ' ' + hourString;
};

let slashdotNews = '<div id="slashdot-content" class="news--table" style="display:none"></div>' +
    '<div id="slashdot-spinner" class="spinner" style="background-image: url(' + spinner + ');"></div>';
$('#tab-3').append(slashdotNews);

const xhrSlashdot = new XMLHttpRequest();
xhrSlashdot.open("GET", CONSTANTS.SLASHDOT_FEED, true);
xhrSlashdot.onreadystatechange = function() {
    if (xhrSlashdot.readyState == CONSTANTS.READY) {
        const data = xhrSlashdot.responseText;
        const todayNews = [];

        $(data).find("story").each(function() {
            const el = $(this);

            todayNews.push({
                "title": el.find("title").text(),
                "link": el.find("url").text(),
                "image": getSlashdotIcon(el),
                "date": el.find("time").text(),
                "comments": el.find("comments").text()
            });
        });

        let slashDot = "";
        if (todayNews.length === 0) {
            slashDot = '<div class="extension--row news--row text--center">No news for today.</div>';
        } else {
            todayNews.forEach(function(entry) {
                slashDot += '<a href="' + entry.link + '" target="_blank">' +
                    '<div class="extension--row news--row">' +
                    '<div class="extension--cell-news"><img class="slashdot--icon" src="' + entry.image + '"/></div>' +
                    '<div class="extension--cell-news">' + entry.title.replace("<![CDATA[", "").replace("]]>", "") + '</div>' +
                    '<div class="news--footer">' +
                    '<div class="news--comments" id="news-comments">' +
                    '<img class="news--comments--image"src="' + chrome.extension.getURL('assets/comments.png') + '"/>' +
                    '<span class="news--comments--number">' + entry.comments + '</span>' +
                    '</div>' +
                    '<div class="news--hour">' + formattedSlashdotDate(entry.date) + '</div>' +
                    '</div>' +
                    '</div>' +
                    '</a><hr class="news--row--separator">';
            });
        }

        $('#slashdot-content').append(slashDot);
        $('#slashdot-spinner').hide();
        $('#slashdot-content').show();
    }
};
xhrSlashdot.send();


// ******************************************************************
//  Science tab
// ******************************************************************

let scienceNews = '<div id="science-content" class="news--table" style="display:none"></div>' +
    '<div id="science-spinner" class="spinner" style="background-image: url(' + spinner + ');"></div>';
$('#tab-4').append(scienceNews);

const xhrScience = new XMLHttpRequest();
xhrScience.open("GET", CONSTANTS.SCIENCE_FEED, true);
xhrScience.onreadystatechange = function() {
    if (xhrScience.readyState == CONSTANTS.READY) {
        const data = xhrScience.responseText;
        const todayNews = [];

        $(data).find("item").each(function() {
            const el = $(this);
            const date = new Date(el.find("pubDate").text());
            if (isRecentNews(date, 24)) {
                todayNews.push({
                    "title": el.find("title").text(),
                    "link": findUrl(el.text()),
                    "isNew": isNew(date),
                    "date": date
                });
            }
        });

        let scienceNews = "";
        if (todayNews.length === 0) {
            scienceNews = '<div class="extension--row news--row text--center">No recent news.</div>';
        } else {
            todayNews.forEach(function(entry) {
                scienceNews += '<a href="' + entry.link + '" target="_blank">' +
                    '<div class="extension--row news--row">' +
                    ((entry.isNew) ? ('<div class="extension--cell-news"><img class="is--new" src="' + chrome.extension.getURL('assets/recent.png') + '" height="16px"/></div>') : '') +
                    '<div class="extension--cell-news">' + entry.title + '</div>' +
                    '<div class=news--hour>' + formattedDate(entry.date) + '</div>' +
                    '</div>' +
                    '</a>' +
                    '<hr class="news--row--separator">';

            });
        }

        $('#science-content').append(scienceNews);
        $('#science-spinner').hide();
        $('#science-content').show();
    }
};
xhrScience.send();


// ******************************************************************
//  Reddit tab
// ******************************************************************

let redditNews = '<div id="reddit-content" class="news--table" style="display:none"></div>' +
    '<div id="reddit-spinner" class="spinner" style="background-image: url(' + spinner + ');"></div>';
$('#tab-5').append(redditNews);

const xhrReddit = new XMLHttpRequest();
xhrReddit.open("GET", CONSTANTS.REDDIT_FEED, true);
xhrReddit.onreadystatechange = function() {
    if (xhrReddit.readyState == CONSTANTS.READY) {
        const data = xhrReddit.responseText;
        const todayNews = [];
        $(data).find("entry").each(function() {
            const el = $(this);
            const date = new Date(el.find("updated").text());

            if (isRecentNews(date, 24)) {
                todayNews.push({
                    "title": el.find("title").text(),
                    "link": el.find("link").attr("href"),
                    "isNew": isNew(date),
                    "date": date
                });
            }
        });

        let reddit = "";
        if (todayNews.length === 0) {
            reddit = '<div class="extension--row news--row text--center">No news for today.</div>';
        } else {
            todayNews.forEach(function(entry) {
                reddit += '<a href="' + entry.link + '" target="_blank">' +
                    '<div class="extension--row news--row">' +
                    ((entry.isNew) ? ('<div class="extension--cell-news"><img class="is--new" src="' + chrome.extension.getURL('assets/recent.png') + '" height="16px"/></div>') : '') +
                    '<div class="extension--cell-news">' + entry.title.replace("<![CDATA[", "").replace("]]>", "") + '</div>' +
                    '<div class=news--hour>' + formattedDate(entry.date) + '</div>' +
                    '</div>' +
                    '</a>' +
                    '<hr class="news--row--separator">';
            });
        }

        $('#reddit-content').append(reddit);
        $('#reddit-spinner').hide();
        $('#reddit-content').show();
    }
};
xhrReddit.send();


weatherRequest();

  
ReactDOM.render(<App />, document.getElementById("chromeApp"));


const TODAY = new Date();