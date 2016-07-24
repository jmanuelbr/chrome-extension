// ******************************************************************
//  Responsive hide logic
// ******************************************************************

window.onresize = t; function t (e) { 
    var screenWidth = $(window).width();
    if (screenWidth < 1050) {
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

var mydiv='<div class="parent--container" id="parent-container">' +
        '<div id="currency-table"></div>' +
        '<div class="news--container>' +
            '<div id="tab-container">' +
                '<ul class="tabs-menu">' +
                    '<li class="current tab1--li--class"><a href="#tab-1"><img class="img--tabs" src="'+ chrome.extension.getURL('assets/theguardian.png') + '"/>News</a></li>' +
                    '<li class="tab2--li--class"><a href="#tab-2"><img class="img--tabs" src="'+ chrome.extension.getURL('assets/bbc-news.jpg') + '"/>BBC-News</a></li>' +
                    '<li class="tab2--li--class"><a href="#tab-3"><img class="img--tabs" src="'+ chrome.extension.getURL('assets/science.png') + '"/>Science</a></li>' +
                '</ul>' +
            '</div>' +
            '<div class="tab">' +
                '<div id="tab-1" class="tab-content"></div>' +
                '<div id="tab-2" class="tab-content"></div>' +
                '<div id="tab-3" class="tab-content"></div>' +
            '</div>' +
        '</div>' +
    '</div>';
$('body').append(mydiv);


var getDate = function(date) {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    var today = dd+'/'+mm+'/'+yyyy;
    return (today == date ? 'Today' : date);
    
};

// ******************************************************************
//  Currency section
// ******************************************************************

var yahooFinancesUrl = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20csv%20where%20url%3D%22http%3A%2F%2Ffinance.yahoo.com%2Fd%2Fquotes.csv%3Fe%3D.csv%26f%3Dnl1d1t1%26s%3Dgbpeur%3DX%22%3B&format=json&callback=";
var xhr = new XMLHttpRequest();
xhr.open("GET", yahooFinancesUrl, true);
xhr.onreadystatechange = function(resp) {
  if (xhr.readyState == 4) {
      var obj = JSON.parse(xhr.responseText);
      var result = obj.query.results.row;
      var currencyTable = 
           '<div class="extension--table">' +
                '<div class="extension-row">' +
                    '<div class="extension--cell"><img class="ukeur--logo--margin"src="' + chrome.extension.getURL('assets/ukeur.jpg') + '" height="16px"/></div>' +
                    '<div class="extension--cell extenstion--cell--text">' + result.col0 + '</div>' +
                    '<div class="extension--cell extenstion--cell--text currency--value">' + result.col1 + '</div>' +
                    '<div class="extension--cell extenstion--cell--text">' + getDate(result.col2) + '</div>' +
                    '<div class="extension--cell extenstion--cell--text">' + result.col3 + '</div>' +
                '</div>' +
            '</div>';
      $('#currency-table').append(currencyTable);
      
  }
};
xhr.send();

// ******************************************************************
//  News Tab
// ******************************************************************

var isTodayNews = function(date, today) {
    return (today.getMonth() == date.getMonth() && 
        today.getDate() == date.getDate());
};

var isNew = function(date, today) {
    var hours = Math.abs(today - date) / 36e5; //60*60*1000
    return (hours <= 1);
};

var findUrl = function(text) {
    var source = (text || '').toString();
    var url;
    var matchArray;
    var regexToken = /(((ftp|https?):\/\/)[\-\w@:%_\+.~#?,&\/\/=]+)|((mailto:)?[_.\w-]+@([\w][\w\-]+\.)+[a-zA-Z]{2,3})/g;

    while( (matchArray = regexToken.exec( source )) !== null ) {
        url = matchArray[0];
        break;
    }
    return url;
};

var theGuardianFeed = "https://www.theguardian.com/uk/rss";
var xhr2 = new XMLHttpRequest();
xhr2.open("GET", theGuardianFeed, true);
xhr2.onreadystatechange = function(resp) {
  if (xhr2.readyState == 4) {
      var data = xhr2.responseText;
      var todayNews = [];
      var today = new Date();
      
      $(data).find("item").each(function () {
        var el = $(this);
        
        var title = el.find("title").text();
        var link = findUrl(el.text());
        var date = new Date(el.find("pubDate").text());
        
        if (isTodayNews(date, today)) {
            todayNews.push({
                "title" : title,
                "link" : link,
                "isNew" : isNew(date, today)
            });    
        }
    });
      
    var allNews = "";
    todayNews.forEach(function(entry) {
        allNews += '<a href="' + entry.link + '" target="_blank">' +
                '<div class="extension--row news--row text-left hvr-push">' +
                ((entry.isNew)?('<div class="extension--cell"><img class="is--new" src="' + chrome.extension.getURL('assets/new.png') + '" height="16px"/></div>'):'') +
                    '<div class="extension--cell">'+ entry.title + '</div>' +
                '</div>' +
            '</a><hr class="news--row--separator">';
        
    });
    var allNews = '<div class="news--table">' +
                    allNews +
                    '</div>';
    $('#tab-1').append(allNews);  
  }
};
xhr2.send();

// ******************************************************************
//  Science tab
// ******************************************************************

var slashDot = "https://rss.sciencedaily.com/top.xml";
var xhr3 = new XMLHttpRequest();
xhr3.open("GET", slashDot, true);
xhr3.onreadystatechange = function(resp) {
  if (xhr3.readyState == 4) {
      var data = xhr3.responseText;
      var today = new Date();
      var todayNews = [];
      
      $(data).find("item").each(function () {
        var el = $(this);
        
        var title = el.find("title").text();
        var link = findUrl(el.text());
        var date = new Date(el.find("pubDate").text());
          
        if (isTodayNews(date, today)) {
            todayNews.push({
                "title" : title,
                "link" : link,
                "isNew" : isNew(date, today)
            });    
        }
    });
      
    var scienceNews = "";
    if (todayNews.length == 0) {
        scienceNews = '<div class="extension--row news--row text--center">No news for today.</div>'
    }
    else {
        todayNews.forEach(function(entry) {
        scienceNews += '<a href="' + entry.link + '" target="_blank">' +
                '<div class="extension--row news--row hvr-push">' +
                ((entry.isNew)?('<div class="extension--cell"><img class="is--new" src="' + chrome.extension.getURL('assets/new.png') + '" height="16px"/></div>'):'') +
                    '<div class="extension--cell">'+ entry.title + '</div>' +
                '</div>' +
            '</a><hr class="news--row--separator">';
        
        });
    }

    scienceNews = '<div class="news--table">' +
                    scienceNews +
                    '</div>';
    $('#tab-3').append(scienceNews); 
  }
};
xhr3.send();

// ******************************************************************
//  BBC tab
// ******************************************************************

var slashDot = "https://feeds.bbci.co.uk/news/rss.xml?edition=uk";
var xhr4 = new XMLHttpRequest();
xhr4.open("GET", slashDot, true);
xhr4.onreadystatechange = function(resp) {
  if (xhr4.readyState == 4) {
      var data = xhr4.responseText;
      
      var today = new Date();
      var todayNews = [];
      
      $(data).find("item").each(function () {
        var el = $(this);
        
        var title = el.find("title").text();
        var link = findUrl(el.text());
        var date = new Date(el.find("pubDate").text());
          
        if (isTodayNews(date, today)) {
            todayNews.push({
                "title" : title,
                "link" : link,
                "isNew" : isNew(date, today)
            });    
        }
    });
      
    var bbcNews = "";
    if (todayNews.length == 0) {
        bbcNews = '<div class="extension--row news--row text--center">No news for today.</div>'
    }
    else {
        todayNews.forEach(function(entry) {
        bbcNews += '<a href="' + entry.link + '" target="_blank">' +
                '<div class="extension--row news--row hvr-push">' +
                ((entry.isNew)?('<div class="extension--cell"><img class="is--new" src="' + chrome.extension.getURL('assets/new.png') + '" height="16px"/></div>'):'') +
                    '<div class="extension--cell">'+ entry.title.replace("<![CDATA[", "").replace("]]>", "") + '</div>' +
                '</div>' +
            '</a><hr class="news--row--separator">';
        
        });
    }

    bbcNews = '<div class="news--table">' +
              bbcNews +
              '</div>';
    $('#tab-2').append(bbcNews); 
  }
};
xhr4.send();





