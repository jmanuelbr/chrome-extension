/* global $, chrome, window, document, XMLHttpRequest */
(function () {

    "use strict";

    // ******************************************************************
    //  Shared functions and constants
    // ******************************************************************

    var READY = 4, // Request finished and response is ready
        GBP_EUR_CHART = "http://www.xe.com/currencycharts/?from=GBP&to=EUR",
        THE_GUARDIAN_FEED = "https://www.theguardian.com/uk/rss",
        SCIENCE_FEED = "https://rss.sciencedaily.com/top.xml",
        BCC_NEWS_FEED = "https://feeds.bbci.co.uk/news/rss.xml?edition=uk",
        DAYLY_NEWS_FEED = "https://www.nydailynews.com/cmlink/NYDN.News.World.rss",
        SLASHDOT_FEED = "https://slashdot.org/slashdot.xml",
        THE_INDEPENDENT_FEED = "https://www.independent.co.,k/news/uk/rss",
        MARCA_FEED = "https://estaticos.marca.com/rss/porta,a.xml",
        REDDIT_FEED = "https://www.reddit.com/r/PS4Deals/ne,/.xml",
        TODAY = new Date(),
        MIN_VIEWPORT_WIDTH = 1050;

    var getDate = function (date) {
        var dd = TODAY.getDate();
        var mm = TODAY.getMonth() + 1; //January is 0!
        var yyyy = TODAY.getFullYear();
        var result = dd + '/' + mm + '/' + yyyy;
        return (result === date ? 'Today' : date);
    };

    var isRecentNews = function (date) {
        var twelveHoursAgo = new Date(TODAY.getTime() - (12 * 60 * 60 * 1000));
        return date > twelveHoursAgo;
    };

    var formattedDate = function (date) {
        var result = "";
        var partials = date.toString().split(' ');
        if (date.getDay() === TODAY.getDay() && date.getMonth() === TODAY.getMonth()) {
            result = "Today " + partials[4];
        } else {
            result = partials[0] + ' ' + partials[2] + ' ' + partials[4];
        }
        return result;
    };

    var isNew = function (date) {
        var hours = Math.abs(TODAY - date) / 36e5; //60*60*1000
        return (hours <= 1);
    };

    var findUrl = function (text) {
        var source = (text || '').toString();
        var url;
        var matchArray;
        var regexToken = /(((ftp|https?):\/\/)[\-\w@:%_\+.~#?,&\/\/=]+)|((mailto:)?[_.\w]+@([\w][\w\-]+\.)+[a-zA-Z]{2,3})/g;

        while ((matchArray = regexToken.exec(source)) !== null ) {
            url = matchArray[0];
            break;
        }
        return url;
    };

    // ******************************************************************
    //  Responsive hide logic
    // ******************************************************************

    window.onresize = function () {
        if ($(window).width() < MIN_VIEWPORT_WIDTH) {
            $("#parent-container").hide();
        }
        else {
            $("#parent-container").show();
        }
    };

    // ******************************************************************
    //  Tabs
    // ******************************************************************

    $(document).ready(function() {
        $('head').append('<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,700" />');
        $(".tabs-menu a").click(function (event) {
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

    var parentDiv = '<div class="parent--container" id="parent-container">' +
                    '<div id="currency-table"></div>' +
                    '<div class="news--container>' +
                        '<div id="tab-container">' +
                            '<ul class="tabs-menu">' +
                                '<li class="current first--tab"><a href="#tab-1"><img class="img--tabs" src="' + chrome.extension.getURL('assets/theguardian.png') + '"/></a></li>' +
                                '<li><a href="#tab-2"><img class="img--tabs" src="'+ 
                                chrome.extension.getURL('assets/bbc-news.png') + '"/></a></li>' +
                                '<li><a href="#tab-3"><img class="img--tabs" src="'+ 
                                chrome.extension.getURL('assets/the-independent.png') + '"/></a></li>' +
                                '<li><a href="#tab-4"><img class="img--tabs" src="'+ 
                                chrome.extension.getURL('assets/daily-news.png') + '"/></a></li>' +
                                '<li><a href="#tab-5"><img class="img--tabs" src="' +
                                chrome.extension.getURL('assets/slashdot.png') + '"/></a></li>' +
                                '<li><a href="#tab-6"><img class="img--tabs" src="' +
                                chrome.extension.getURL('assets/science.png') + '"/></a></li>' +
                                '<li><a href="#tab-7"><img class="img--tabs" src="' +
                                chrome.extension.getURL('assets/marca.png') + '"/></a></li>' +
                                '<li class="last--tab"><a href="#tab-8"><img class="img--tabs" src="' +
                                chrome.extension.getURL('assets/reddit.png') + '"/></a></li>' +
                            '</ul>' +
                        '</div>' +
                        '<div class="tab">' +
                            '<div id="tab-1" class="tab-content"></div>' +
                            '<div id="tab-2" class="tab-content"></div>' +
                            '<div id="tab-3" class="tab-content"></div>' +
                            '<div id="tab-4" class="tab-content"></div>' +
                            '<div id="tab-5" class="tab-content"></div>' +
                            '<div id="tab-6" class="tab-content"></div>' +
                            '<div id="tab-7" class="tab-content"></div>' +
                            '<div id="tab-8" class="tab-content"></div>' +
                        '</div>' +
                    '</div>' +
                '</div>';
    $('body').append(parentDiv);

    // ******************************************************************
    //  Currency section
    // ******************************************************************

    var xhrCurrency = new XMLHttpRequest();
    xhrCurrency.open("GET", "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20csv%20where%20url%3D%22http%3A%2F%2Ffinance.yahoo.com%2Fd%2Fquotes.csv%3Fe%3D.csv%26f%3Dnl1d1t1%26s%3Dgbpeur%3DX%22%3B&format=json&callback=", true);
    xhrCurrency.onreadystatechange = function() {
      if (xhrCurrency.readyState == READY) {
          var obj = JSON.parse(xhrCurrency.responseText);
          var result = obj.query.results.row;
          var currencyTable = 
               '<div class="extension--table">' +
                    '<div class="extension-row">' +
                        '<div class="extension--cell"><a href="'+ GBP_EUR_CHART +'" target="_blank"><img class="ukeur--logo--margin" src="' + chrome.extension.getURL('assets/ukeur.jpg') + '" height="16px"/></a></div>' +
                        '<div class="extension--cell extenstion--cell--text">' + result.col0 + '</div>' +
                        '<div class="extension--cell extenstion--cell--text currency--value">' + result.col1 + '</div>' +
                        '<div class="extension--cell extenstion--cell--text">' + getDate(result.col2) + '</div>' +
                        '<div class="extension--cell extenstion--cell--text">' + result.col3 + '</div>' +
                    '</div>' +
                '</div>';
          $('#currency-table').append(currencyTable);

        }
    };
    xhrCurrency.send();

    // ******************************************************************
    //  The Guardian Tab
    // ******************************************************************

    var xhrTheGuardian = new XMLHttpRequest();
    xhrTheGuardian.open("GET", THE_GUARDIAN_FEED, true);
    xhrTheGuardian.onreadystatechange = function() {
      if (xhrTheGuardian.readyState == READY) {
          var data = xhrTheGuardian.responseText;
          var todayNews = [];

          $(data).find("item").each(function () {
            var el = $(this);
            var date = new Date(el.find("pubDate").text());

            if (isRecentNews(date)) {
                todayNews.push({
                    "title" : el.find("title").text(),
                    "link" : findUrl(el.text()),
                    "isNew" : isNew(date),
                    "date" : date
                });    
            }
        });

        var allNews = "";
        todayNews.forEach(function(entry) {
            allNews += '<a href="' + entry.link + '" target="_blank">' +
                            '<div class="extension--row news--row text-left">' +
                                ((entry.isNew)?('<div class="extension--cell"><img class="is--new" src="' + chrome.extension.getURL('assets/recent.png') + '" height="16px"/></div>'):'') +
                                '<div class="extension--cell">'+ entry.title + '</div>' +
                                '<div class=news--hour>' + formattedDate(entry.date) + '</div>' + 
                            '</div>' +
                        '</a>' +
                        '<hr class="news--row--separator">';
        });
        allNews = '<div class="news--table">' +
                       allNews +
                      '</div>';
        $('#tab-1').append(allNews);  
      }
    };
    xhrTheGuardian.send();

    // ******************************************************************
    //  Science tab
    // ******************************************************************

    var xhrScience = new XMLHttpRequest();
    xhrScience.open("GET", SCIENCE_FEED, true);
    xhrScience.onreadystatechange = function() {
      if (xhrScience.readyState == READY) {
          var data = xhrScience.responseText;
          var todayNews = [];

          $(data).find("item").each(function () {
            var el = $(this);
            var date = new Date(el.find("pubDate").text());
            if (isRecentNews(date)) {
                todayNews.push({
                    "title" : el.find("title").text(),
                    "link" : findUrl(el.text()),
                    "isNew" : isNew(date)
                });    
            }
        });

        var scienceNews = "";
        if (todayNews.length === 0) {
            scienceNews = '<div class="extension--row news--row text--center">No recent news.</div>';
        }
        else {
            todayNews.forEach(function(entry) {
            scienceNews += '<a href="' + entry.link + '" target="_blank">' +
                                '<div class="extension--row news--row">' +
                                    ((entry.isNew)?('<div class="extension--cell"><img class="is--new" src="' + chrome.extension.getURL('assets/recent.png') + '" height="16px"/></div>'):'') +
                                    '<div class="extension--cell">'+ entry.title + '</div>' +
                                '</div>' +
                            '</a>' + 
                            '<hr class="news--row--separator">';

            });
        }

        scienceNews = '<div class="news--table">' +
                        scienceNews +
                      '</div>';
        $('#tab-6').append(scienceNews); 
      }
    };
    xhrScience.send();

    // ******************************************************************
    //  BBC tab
    // ******************************************************************

    var xhrBbc = new XMLHttpRequest();
    xhrBbc.open("GET", BCC_NEWS_FEED, true);
    xhrBbc.onreadystatechange = function() {
      if (xhrBbc.readyState == READY) {
          var data = xhrBbc.responseText;
          var todayNews = [];

          $(data).find("item").each(function () {
            var el = $(this);
            var date = new Date(el.find("pubDate").text());

            if (isRecentNews(date)) {
                todayNews.push({
                    "title" : el.find("title").text(),
                    "link" : findUrl(el.text()),
                    "isNew" : isNew(date),
                    "date" : date
                });    
            }
        });

        var bbcNews = "";
        if (todayNews.length === 0) {
            bbcNews = '<div class="extension--row news--row text--center">No news for today.</div>';
        }
        else {
            todayNews.forEach(function(entry) {
            bbcNews += '<a href="' + entry.link + '" target="_blank">' +
                            '<div class="extension--row news--row">' +
                                ((entry.isNew)?('<div class="extension--cell"><img class="is--new" src="' + chrome.extension.getURL('assets/recent.png') + '" height="16px"/></div>'):'') +
                                '<div class="extension--cell">'+ entry.title.replace("<![CDATA[", "").replace("]]>", "") + '</div>' +
                                '<div class=news--hour>' + formattedDate(entry.date) + '</div>' + 
                            '</div>' +
                       '</a>' + 
                       '<hr class="news--row--separator">';
            });
        }

        bbcNews = '<div class="news--table">' +
                   bbcNews +
                  '</div>';
        $('#tab-2').append(bbcNews); 
      }
    };
    xhrBbc.send();

    // ******************************************************************
    //  Daily News tab
    // ******************************************************************

    var xhrDailyNews = new XMLHttpRequest();
    xhrDailyNews.open("GET", DAYLY_NEWS_FEED, true);
    xhrDailyNews.onreadystatechange = function() {
      if (xhrDailyNews.readyState == READY) {
          var data = xhrDailyNews.responseText;
          var todayNews = [];

          $(data).find("item").each(function () {
            var el = $(this);
            var date = new Date(el.find("pubDate").text());

            if (isRecentNews(date)) {
                todayNews.push({
                    "title" : el.find("title").text(),
                    "link" : findUrl(el.text()),
                    "isNew" : isNew(date),
                    "date" : date
                });    
            }
        });

        var dailyNews = "";
        if (todayNews.length === 0) {
            dailyNews = '<div class="extension--row news--row text--center">No news for today.</div>';
        }
        else {
            todayNews.forEach(function(entry) {
            dailyNews += '<a href="' + entry.link + '" target="_blank">' +
                            '<div class="extension--row news--row">' +
                                ((entry.isNew)?('<div class="extension--cell"><img class="is--new" src="' + chrome.extension.getURL('assets/recent.png') + '" height="16px"/></div>'):'') +
                                '<div class="extension--cell">'+ entry.title.replace("<![CDATA[", "").replace("]]>", "") + '</div>' +
                                '<div class=news--hour>' + formattedDate(entry.date) + '</div>' + 
                            '</div>' +
                         '</a>' + 
                         '<hr class="news--row--separator">';
            });
        }

        dailyNews = '<div class="news--table">' +
                     dailyNews +
                    '</div>';
        $('#tab-4').append(dailyNews); 
      }
    };
    xhrDailyNews.send();

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

    var xhrSlashdot = new XMLHttpRequest();
    xhrSlashdot.open("GET", SLASHDOT_FEED, true);
    xhrSlashdot.onreadystatechange = function() {
      if (xhrSlashdot.readyState == READY) {
          var data = xhrSlashdot.responseText;
          var todayNews = [];

          $(data).find("story").each(function () {
            var el = $(this);

            todayNews.push({
                "title" : el.find("title").text(),
                "link" : el.find("url").text(),
                "image" : getSlashdotIcon(el),
                "date" : el.find("time").text(),
                "comments" : el.find("comments").text()
            });    
        });

        var slashDot = "";
        if (todayNews.length === 0) {
            slashDot = '<div class="extension--row news--row text--center">No news for today.</div>';
        }
        else {
            todayNews.forEach(function(entry) {
            slashDot += '<a href="' + entry.link + '" target="_blank">' +
                            '<div class="extension--row news--row">' +
                                '<div class="extension--cell"><img class="slashdot--icon" src="' + entry.image + '"/></div>' +
                                '<div class="extension--cell">'+ entry.title.replace("<![CDATA[", "").replace("]]>", "") + '</div>' +
                                '<div class="news--footer">' + 
                                    '<div class="news--comments" id="news-comments">' + 
                                        '<img class="news--comments--image"src="'+ chrome.extension.getURL('assets/comments.png') +'"/>' + 
                                        '<span class="news--comments--number">' + entry.comments + '</span>' + 
                                    '</div>' + 
                                    '<div class="news--hour">' + formattedSlashdotDate(entry.date) + '</div>' + 
                                '</div>' + 
                            '</div>' +
                '</a><hr class="news--row--separator">';
            });
        }

        slashDot = '<div class="news--table">' +
                    slashDot +
                   '</div>';
        $('#tab-5').append(slashDot); 
      }
    };
    xhrSlashdot.send();


    // ******************************************************************
    //  The Independent tab
    // ******************************************************************

    var xhrTheIndependent = new XMLHttpRequest();
    xhrTheIndependent.open("GET", THE_INDEPENDENT_FEED, true);
    xhrTheIndependent.onreadystatechange = function() {
      if (xhrTheIndependent.readyState == READY) {
          var data = xhrTheIndependent.responseText;
          var todayNews = [];

          $(data).find("item").each(function () {
            var el = $(this);
            var date = new Date(el.find("pubDate").text());

            if (isRecentNews(date)) {
                todayNews.push({
                    "title" : el.find("title").text(),
                    "link" : findUrl(el.text()),
                    "isNew" : isNew(date),
                    "date" : date
                });    
            }
        });

        var theIndependent = "";
        if (todayNews.length === 0) {
            theIndependent = '<div class="extension--row news--row text--center">No news for today.</div>';
        }
        else {
            todayNews.forEach(function(entry) {
            theIndependent += '<a href="' + entry.link + '" target="_blank">' +
                            '<div class="extension--row news--row">' +
                                ((entry.isNew)?('<div class="extension--cell"><img class="is--new" src="' + chrome.extension.getURL('assets/recent.png') + '" height="16px"/></div>'):'') +
                                '<div class="extension--cell">'+ entry.title.replace("<![CDATA[", "").replace("]]>", "") + '</div>' +
                                '<div class=news--hour>' + formattedDate(entry.date) + '</div>' + 
                            '</div>' +
                       '</a>' + 
                       '<hr class="news--row--separator">';
            });
        }

        theIndependent = '<div class="news--table">' +
                   theIndependent +
                  '</div>';
        $('#tab-3').append(theIndependent); 
      }
    };
    xhrTheIndependent.send();


    // ******************************************************************
    //  Marca tab
    // ******************************************************************

    var xhrMarca = new XMLHttpRequest();
    xhrMarca.open("GET", MARCA_FEED, true);
    xhrMarca.onreadystatechange = function() {
      if (xhrMarca.readyState == READY) {
          var data = xhrMarca.responseText;
          var todayNews = [];

          $(data).find("item").each(function () {
            var el = $(this);
            var date = new Date(el.find("pubDate").text());

            if (isRecentNews(date)) {
                todayNews.push({
                    "title" : el.find("title").text(),
                    "link" : findUrl(el.text()),
                    "isNew" : isNew(date),
                    "date" : date
                });    
            }
        });

        var marca = "";
        if (todayNews.length === 0) {
            marca = '<div class="extension--row news--row text--center">No news for today.</div>';
        }
        else {
            todayNews.forEach(function(entry) {
            marca += '<a href="' + entry.link + '" target="_blank">' +
                            '<div class="extension--row news--row">' +
                                ((entry.isNew)?('<div class="extension--cell"><img class="is--new" src="' + chrome.extension.getURL('assets/recent.png') + '" height="16px"/></div>'):'') +
                                '<div class="extension--cell">'+ entry.title.replace("<![CDATA[", "").replace("]]>", "") + '</div>' +
                                '<div class=news--hour>' + formattedDate(entry.date) + '</div>' + 
                            '</div>' +
                       '</a>' + 
                       '<hr class="news--row--separator">';
            });
        }

        marca = '<div class="news--table">' +
                   marca +
                  '</div>';
        $('#tab-7').append(marca); 
      }
    };
    xhrMarca.send();

    // ******************************************************************
    //  Reddit tab
    // ******************************************************************

    var isRedditRecentNews = function(date) {
        var twentyFourHoursAgo = new Date(TODAY.getTime() - (24 * 60 * 60 * 1000));
        return date > twentyFourHoursAgo;
    };

    var xhrReddit = new XMLHttpRequest();
    xhrReddit.open("GET", REDDIT_FEED, true);
    xhrReddit.onreadystatechange = function() {
      if (xhrReddit.readyState == READY) {
          var data = xhrReddit.responseText;
          var todayNews = [];
          $(data).find("entry").each(function () {
            var el = $(this);
            var date = new Date(el.find("updated").text());

            if (isRedditRecentNews(date)) {
                todayNews.push({
                    "title" : el.find("title").text(),
                    "link" : el.find("link").attr("href"),
                    "isNew" : isNew(date),
                    "date" : date
                });    
            }
        });

        var reddit = "";
        if (todayNews.length === 0) {
            reddit = '<div class="extension--row news--row text--center">No news for today.</div>';
        }
        else {
            todayNews.forEach(function(entry) {
            reddit += '<a href="' + entry.link + '" target="_blank">' +
                            '<div class="extension--row news--row">' +
                                ((entry.isNew)?('<div class="extension--cell"><img class="is--new" src="' + chrome.extension.getURL('assets/recent.png') + '" height="16px"/></div>'):'') +
                                '<div class="extension--cell">'+ entry.title.replace("<![CDATA[", "").replace("]]>", "") + '</div>' +
                                '<div class=news--hour>' + formattedDate(entry.date) + '</div>' + 
                            '</div>' +
                       '</a>' + 
                       '<hr class="news--row--separator">';
            });
        }

        reddit = '<div class="news--table">' +
                   reddit +
                  '</div>';
        $('#tab-8').append(reddit); 
      }
    };
    xhrReddit.send();

}());