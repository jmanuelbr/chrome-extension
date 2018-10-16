/* global $, chrome, window, document, XMLHttpRequest */
(function() {

    "use strict";

    // ******************************************************************
    //  Shared functions and constants
    // ******************************************************************
    var READY = 4, // Request finished and response is ready
        GBP_EUR_CHART = "https://free.currencyconverterapi.com/api/v5/convert?q=GBP_EUR&compact=y",
        THE_GUARDIAN_FEED = "https://www.theguardian.com/uk/rss",
        SCIENCE_FEED = "https://rss.sciencedaily.com/top.xml",
        BCC_NEWS_FEED = "https://feeds.bbci.co.uk/news/rss.xml?edition=uk",
        SLASHDOT_FEED = "https://slashdot.org/slashdot.xml",
        REDDIT_FEED = "https://www.reddit.com/r/PS4Deals/new/.xml",
        TODAY = new Date(),
        MIN_VIEWPORT_WIDTH = 1050;

    var getDate = function(date) {
        var dd = TODAY.getDate();
        var mm = TODAY.getMonth() + 1; //January is 0!
        var yyyy = TODAY.getFullYear();
        var result = dd + '/' + mm + '/' + yyyy;
        return (result === date ? 'Today' : date);
    };

    var isRecentNews = function(date, hours) {
        var time = (hours ? hours : 12);
        var hoursAgo = new Date(TODAY.getTime() - (time * 60 * 60 * 1000));
        return date > hoursAgo;
    };

    var formattedDate = function(date) {
        var result = "";
        var partials = date.toString().split(' ');
        if (date.getDay() === TODAY.getDay() && date.getMonth() === TODAY.getMonth()) {
            result = "Today " + partials[4];
        } else {
            result = partials[0] + ' ' + partials[2] + ' ' + partials[4];
        }
        return result;
    };

    var isNew = function(date) {
        var hours = Math.abs(TODAY - date) / 36e5; //60*60*1000
        return (hours <= 1);
    };

    var findUrl = function(text) {
        var source = (text || '').toString();
        var url;
        var matchArray;
        var regexToken = /(((ftp|https?):\/\/)[\-\w@:%_\+.~#?,&\/\/=]+)|((mailto:)?[_.\w]+@([\w][\w\-]+\.)+[a-zA-Z]{2,3})/g;

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
        if ($(window).width() < MIN_VIEWPORT_WIDTH) {
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
            var tab = $(this).attr("href");
            $(".tab-content").not(tab).css("display", "none");
            $(tab).fadeIn();
        });
    });

    // ******************************************************************
    //  Parent container
    // ******************************************************************

    var spinner = "'" + chrome.extension.getURL('assets/spinner.gif') + "'";

    var weatherHtml = `<div class="weather--container">
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
    var parentDiv = '<div class="parent-widget-container" id="parent-container">' +
        '<div id="currency-table"></div>' +
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

    var xhrCurrency = new XMLHttpRequest();
    xhrCurrency.open("GET", GBP_EUR_CHART, true);
    xhrCurrency.onreadystatechange = function() {
        if (xhrCurrency.readyState == READY) {
            var obj = JSON.parse(xhrCurrency.responseText);
            var jsonResponse = JSON.parse(xhrCurrency.responseText);
            var currencyRate = jsonResponse.GBP_EUR.val;
            var currencyTable =
                '<div class="extension--table">' +
                '<div>' +
                '<div class="extension--cell"><a href="https://www.xe.com/currencyconverter/convert/?Amount=1&From=GBP&To=EUR" target="_blank"><img class="ukeur--logo--margin" src="' + chrome.extension.getURL('assets/currency-feed.png') + '" height="20px"/></a></div>' +
                '<div class="extension--cell extenstion--cell--text">GBP/EUR</div>' +
                '<div class="extension--cell extenstion--cell--text currency--value">' + currencyRate + '</div>' +
                '</div>' +
                '</div>';
            $('#currency-table').append(currencyTable);

        }
    };
    xhrCurrency.send();


    // ******************************************************************
    //  BBC tab
    // ******************************************************************

    var bbcNews = '<div id="bbc-content" class="news--table" style="display:none"></div>' +
        '<div id="bbc-spinner" class="spinner" style="background-image: url(' + spinner + ');"></div>';
    $('#tab-1').append(bbcNews);
    var xhrBbc = new XMLHttpRequest();
    xhrBbc.open("GET", BCC_NEWS_FEED, true);
    xhrBbc.onreadystatechange = function() {
        if (xhrBbc.readyState == READY) {
            var data = xhrBbc.responseText;
            var todayNews = [];

            $('item', data).each(function(index, value) {

                var el = $(this);
                var date = new Date(el.find("pubDate").text());
                var mediaThumbnail = el.find("media\\:thumbnail")[0];
                var thumbnail;
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

            var bbcNews = "";
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

    var theGuardianNews = '<div id="theguardian-content" class="news--table" style="display:none"></div>' +
        '<div id="theguardian-spinner" class="spinner" style="background-image: url(' + spinner + ');"></div>';
    $('#tab-2').append(theGuardianNews);
    var xhrTheGuardian = new XMLHttpRequest();
    xhrTheGuardian.open("GET", THE_GUARDIAN_FEED, true);
    xhrTheGuardian.onreadystatechange = function() {
        if (xhrTheGuardian.readyState == READY) {
            var data = xhrTheGuardian.responseText;
            var todayNews = [];

            $(data).find("item").each(function() {
                var el = $(this);
                var date = new Date(el.find("pubDate").text());

                if (isRecentNews(date)) {
                    todayNews.push({
                        "title": el.find("title").text(),
                        "link": findUrl(el.text()),
                        "isNew": isNew(date),
                        "date": date
                    });
                }
            });

            var allNews = "";
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

    var getSlashdotIcon = function(element) {
        var array = element.text().split(/\n/);
        return 'https://a.fsdn.com/sd/topics/' + array[array.length - 2].replace(/\t/g, '').replace(/\W+\./g, "");
    };

    var formattedSlashdotDate = function(feedDate) {
        var arrayDate = feedDate.split(' ');
        var dateString = arrayDate[0];
        var hourString = arrayDate[1];
        var date = new Date(dateString);
        if (date.getDay() == TODAY.getDay() && date.getMonth() == TODAY.getMonth()) {
            dateString = "Today";
        }
        return dateString + ' ' + hourString;
    };

    var slashdotNews = '<div id="slashdot-content" class="news--table" style="display:none"></div>' +
        '<div id="slashdot-spinner" class="spinner" style="background-image: url(' + spinner + ');"></div>';
    $('#tab-3').append(slashdotNews);

    var xhrSlashdot = new XMLHttpRequest();
    xhrSlashdot.open("GET", SLASHDOT_FEED, true);
    xhrSlashdot.onreadystatechange = function() {
        if (xhrSlashdot.readyState == READY) {
            var data = xhrSlashdot.responseText;
            var todayNews = [];

            $(data).find("story").each(function() {
                var el = $(this);

                todayNews.push({
                    "title": el.find("title").text(),
                    "link": el.find("url").text(),
                    "image": getSlashdotIcon(el),
                    "date": el.find("time").text(),
                    "comments": el.find("comments").text()
                });
            });

            var slashDot = "";
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

    var scienceNews = '<div id="science-content" class="news--table" style="display:none"></div>' +
        '<div id="science-spinner" class="spinner" style="background-image: url(' + spinner + ');"></div>';
    $('#tab-4').append(scienceNews);

    var xhrScience = new XMLHttpRequest();
    xhrScience.open("GET", SCIENCE_FEED, true);
    xhrScience.onreadystatechange = function() {
        if (xhrScience.readyState == READY) {
            var data = xhrScience.responseText;
            var todayNews = [];

            $(data).find("item").each(function() {
                var el = $(this);
                var date = new Date(el.find("pubDate").text());
                if (isRecentNews(date, 24)) {
                    todayNews.push({
                        "title": el.find("title").text(),
                        "link": findUrl(el.text()),
                        "isNew": isNew(date),
                        "date": date
                    });
                }
            });

            var scienceNews = "";
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

    var redditNews = '<div id="reddit-content" class="news--table" style="display:none"></div>' +
        '<div id="reddit-spinner" class="spinner" style="background-image: url(' + spinner + ');"></div>';
    $('#tab-5').append(redditNews);

    var xhrReddit = new XMLHttpRequest();
    xhrReddit.open("GET", REDDIT_FEED, true);
    xhrReddit.onreadystatechange = function() {
        if (xhrReddit.readyState == READY) {
            var data = xhrReddit.responseText;
            var todayNews = [];
            $(data).find("entry").each(function() {
                var el = $(this);
                var date = new Date(el.find("updated").text());

                if (isRecentNews(date, 24)) {
                    todayNews.push({
                        "title": el.find("title").text(),
                        "link": el.find("link").attr("href"),
                        "isNew": isNew(date),
                        "date": date
                    });
                }
            });

            var reddit = "";
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
                var temp = data.currently.temperature;
                var celsius = data.currently.temperature.toFixed(1) + "&deg;C";
                var description = data.currently.summary;
                var icon = "wi wi-forecast-io-" + data.currently.icon;
                var wind = " " + data.currently.windSpeed.toFixed(1) + " m/s ";
                var humidity = " " + (data.currently.humidity * 100).toFixed(0) + " %";

                $("#location").html("London");
                $("#icon").html("<i class=\"" + icon + "\">");
                $("#description").html(description);
                $("#humidity").html(humidity);
                $("#wind").html(wind);
                $(".celsius").html(celsius);
                $('div').removeClass('weather-loader');

                //today forecast in C
                var todayMaxTemp = data.daily.data[0].temperatureMax.toFixed(0);
                var todayMinTemp = data.daily.data[0].temperatureMin.toFixed(0);
                var todayIcon = "wi wi-forecast-io-" + data.daily.data[0].icon;
                $("#todayC").html("<br>" + todayMinTemp + "&deg;/" + todayMaxTemp + "&deg; <br> <i class=\"" + todayIcon + "\" id=\"smallIcon\">");

                //tomorrow forecast in C
                var tomorrowMaxTemp = data.daily.data[1].temperatureMax.toFixed(0);
                var tomorrowMinTemp = data.daily.data[1].temperatureMin.toFixed(0);
                var tomorrowIcon = "wi wi-forecast-io-" + data.daily.data[1].icon;
                $("#tomorrowC").html("<br>" + tomorrowMinTemp + "&deg;/" + tomorrowMaxTemp + "&deg; <br> <i class=\"" + tomorrowIcon + "\" id=\"smallIcon\">");

                //after tomorrow forecast in C
                var afterTomorrowMaxTemp = data.daily.data[2].temperatureMax.toFixed(0);
                var afterTomorrowMinTemp = data.daily.data[2].temperatureMin.toFixed(0);
                var afterTomorrowIcon = "wi wi-forecast-io-" + data.daily.data[2].icon;
                $("#afterTomorrowC").html("<br>" + afterTomorrowMinTemp + "&deg;/" + afterTomorrowMaxTemp + "&deg; <br> <i class=\"" + afterTomorrowIcon + "\" id=\"smallIcon\">");

                //after after tomorrow forecast in C
                var afterAfterTomorrowMaxTemp = data.daily.data[3].temperatureMax.toFixed(0);
                var afterAfterTomorrowMinTemp = data.daily.data[3].temperatureMin.toFixed(0);
                var afterAfterTomorrowIcon = "wi wi-forecast-io-" + data.daily.data[3].icon;
                $("#afterAfterTomorrowC").html("<br>" + afterAfterTomorrowMinTemp + "&deg;/" + afterAfterTomorrowMaxTemp + "&deg; <br> <i class=\"" + afterAfterTomorrowIcon + "\" id=\"smallIcon\">");
            })
            .catch((error) => {
                console.log('Error fetching ', WEATHER_FEED, error);
            });
    };
    weatherRequest();

}());