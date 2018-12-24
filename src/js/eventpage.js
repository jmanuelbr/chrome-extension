import axios from 'axios';
import $ from 'jquery';
import * as CONSTANTS from './constants';
import { formattedDate } from './helper';
require('../scss/global.scss');

const TODAY = new Date();
/* global $, chrome, window, document, XMLHttpRequest */

const isRecentNews = function(date, hours) {
    const time = (hours ? hours : 12);
    const hoursAgo = new Date(TODAY.getTime() - (time * 60 * 60 * 1000));
    return date > hoursAgo;
};

const isNew = function(date) {
    const hours = Math.abs(TODAY - date) / 36e5; //60*60*1000
    return (hours <= 1);
};

const findUrl = function(text) {
    const source = (text || '').toString();
    let url;
    let matchArray;
    const regexToken = /(((ftp|https?):\/\/)[\-\w@:%_\+.~#?,&\/\/=]+)|((mailto:)?[_.\w]+@([\w][\w\-]+\.)+[a-zA-Z]{2,3})/g;

    while ((matchArray = regexToken.exec(source)) !== null) {
        url = matchArray[0];
        break;
    }
    return url;
};

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

const weatherHtml = `<div class="weather--container">
        <div class="weather-city ">
            <div class="container-weather">
            <div class="weather-city-title ">
                <span id="location"> </span>
            </div>
            <hr class="weather-hr"/>
            <div class="weather-city-weather-temperature weather-loader">
                <span class="celsius fahrenheit-btn "></span>
            </div>
            <div class="weather-city-weather-description">
                <span id="icon"></span><br>
                <span id="description"></span>
            </div>
            <div class="weather-bottom">
                <div class="nav-info-weather clearfix">
                <div class="add-info">
                    <ul id="weather-details">
                    <li>
                        <span id="todayC"> </span>
                    </li>
                    <li>
                        <span id="tomorrowC"> </span>
                    </li>
                    <li>
                        <span id="afterTomorrowC"> </span>
                    </li>
                    <li>
                        <span id="afterAfterTomorrowC"> </span>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
`;
const parentDiv = '<div class="parent-widget-container" id="parent-container">' +
    '<div class="currency-section" id="currency-table"></div>' +
    '<div class="news--container>' +
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
//  Currency section
// ******************************************************************

const xhrCurrency = new XMLHttpRequest();
xhrCurrency.open("GET", CONSTANTS.GBP_EUR_CHART, true);
xhrCurrency.onreadystatechange = function() {
    if (xhrCurrency.readyState == CONSTANTS.READY) {
        const obj = JSON.parse(xhrCurrency.responseText);
        const jsonResponse = JSON.parse(xhrCurrency.responseText);
        const currencyRate = jsonResponse.GBP_EUR.val;
        const currencyTable =
            '<div class="widget-table">' +
            '<div class="currency-image">' +
                '<a href="https://www.xe.com/currencyconverter/convert/?Amount=1&From=GBP&To=EUR" target="_blank">' +
                    '<img class="ukeur--logo--margin" src="' + chrome.extension.getURL('assets/currency-feed.png') + '" height="20px"/>' +
                '</a>' +
            '</div>' +
            '<div class="currency-text">GBP/EUR</div>' +
            '<div class="currency-text currency-value">' + currencyRate + '</div>' +
            '</div>';
        $('#currency-table').append(currencyTable);

    }
};
xhrCurrency.send();


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


// ******************************************************************
//  Shared functions and constants
// ******************************************************************
const WEATHER_FEED = "https://api.darksky.net/forecast/e9231a0d68ba35226274ad3b5e1f6dc4/51.5177896,0.1085338000000000?callback=?&units=uk";

// ******************************************************************
//  Weather widget
// ******************************************************************

const weatherRequest = () => {
    axios.get(WEATHER_FEED).then(function(response) {
            let data = response.data;
            const json = data.replace(/^[^(]*\(([\S\s]+)\);?$/, '$1');
            data = JSON.parse(json);
            const temp = data.currently.temperature;
            const celsius = data.currently.temperature.toFixed(1) + "&deg;C";
            const description = data.currently.summary;
            const icon = "wi wi-forecast-io-" + data.currently.icon;
            const wind = " " + data.currently.windSpeed.toFixed(1) + " m/s ";
            const humidity = " " + (data.currently.humidity * 100).toFixed(0) + " %";

            $("#location").html("London");
            $("#icon").html("<i class=\"" + icon + "\">");
            $("#description").html(description);
            $("#humidity").html(humidity);
            $("#wind").html(wind);
            $(".celsius").html(celsius);
            $('div').removeClass('weather-loader');

            //today forecast in C
            const todayMaxTemp = data.daily.data[0].temperatureMax.toFixed(0);
            const todayMinTemp = data.daily.data[0].temperatureMin.toFixed(0);
            const todayIcon = "wi wi-forecast-io-" + data.daily.data[0].icon;
            $("#todayC").html("<br>" + todayMinTemp + "&deg;/" + todayMaxTemp + "&deg; <br> <i class=\"" + todayIcon + "\" id=\"smallIcon\">");

            //tomorrow forecast in C
            const tomorrowMaxTemp = data.daily.data[1].temperatureMax.toFixed(0);
            const tomorrowMinTemp = data.daily.data[1].temperatureMin.toFixed(0);
            const tomorrowIcon = "wi wi-forecast-io-" + data.daily.data[1].icon;
            $("#tomorrowC").html("<br>" + tomorrowMinTemp + "&deg;/" + tomorrowMaxTemp + "&deg; <br> <i class=\"" + tomorrowIcon + "\" id=\"smallIcon\">");

            //after tomorrow forecast in C
            const afterTomorrowMaxTemp = data.daily.data[2].temperatureMax.toFixed(0);
            const afterTomorrowMinTemp = data.daily.data[2].temperatureMin.toFixed(0);
            const afterTomorrowIcon = "wi wi-forecast-io-" + data.daily.data[2].icon;
            $("#afterTomorrowC").html("<br>" + afterTomorrowMinTemp + "&deg;/" + afterTomorrowMaxTemp + "&deg; <br> <i class=\"" + afterTomorrowIcon + "\" id=\"smallIcon\">");

            //after after tomorrow forecast in C
            const afterAfterTomorrowMaxTemp = data.daily.data[3].temperatureMax.toFixed(0);
            const afterAfterTomorrowMinTemp = data.daily.data[3].temperatureMin.toFixed(0);
            const afterAfterTomorrowIcon = "wi wi-forecast-io-" + data.daily.data[3].icon;
            $("#afterAfterTomorrowC").html("<br>" + afterAfterTomorrowMinTemp + "&deg;/" + afterAfterTomorrowMaxTemp + "&deg; <br> <i class=\"" + afterAfterTomorrowIcon + "\" id=\"smallIcon\">");
        })
        .catch((error) => {
            console.log('Error fetching ', WEATHER_FEED, error);
        });
};
weatherRequest();
