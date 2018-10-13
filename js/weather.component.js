/* global $, chrome, window, document, XMLHttpRequest */
(function () {

    "use strict";

    // ******************************************************************
    //  Shared functions and constants
    // ******************************************************************
    var READY = 4,
        WEATHER_FEED = "https://api.darksky.net/forecast/e9231a0d68ba35226274ad3b5e1f6dc4/51.5177896,0.1085338000000000?callback=?&units=uk",
        TODAY = new Date(),
        MIN_VIEWPORT_WIDTH = 1050;


// ******************************************************************
//  Weather widget
// ******************************************************************
var latitude;
var longitude;

var xhrWeather = new XMLHttpRequest();
xhrWeather.open("GET", WEATHER_FEED, true);
xhrWeather.onreadystatechange = function() {

if (xhrWeather.readyState == READY) {
    var json = xhrWeather.responseText; 
    json = json.replace(/^[^(]*\(([\S\s]+)\);?$/, '$1');
    var data = JSON.parse(json);

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
    $("#todayC").html("<br>"+ todayMinTemp + "&deg;/"+ todayMaxTemp +"&deg; <br> <i class=\"" + todayIcon + "\" id=\"smallIcon\">");

    //tomorrow forecast in C
    var tomorrowMaxTemp = data.daily.data[1].temperatureMax.toFixed(0);
    var tomorrowMinTemp = data.daily.data[1].temperatureMin.toFixed(0);
    var tomorrowIcon = "wi wi-forecast-io-" + data.daily.data[1].icon;
    $("#tomorrowC").html("<br>"+ tomorrowMinTemp + "&deg;/"+ tomorrowMaxTemp +"&deg; <br> <i class=\"" + tomorrowIcon + "\" id=\"smallIcon\">");
    
    //after tomorrow forecast in C
    var afterTomorrowMaxTemp = data.daily.data[2].temperatureMax.toFixed(0);
    var afterTomorrowMinTemp = data.daily.data[2].temperatureMin.toFixed(0);
    var afterTomorrowIcon = "wi wi-forecast-io-" + data.daily.data[2].icon;
    $("#afterTomorrowC").html("<br>"+ afterTomorrowMinTemp + "&deg;/"+ afterTomorrowMaxTemp +"&deg; <br> <i class=\"" + afterTomorrowIcon + "\" id=\"smallIcon\">");

    //after after tomorrow forecast in C
    var afterAfterTomorrowMaxTemp = data.daily.data[3].temperatureMax.toFixed(0);
    var afterAfterTomorrowMinTemp = data.daily.data[3].temperatureMin.toFixed(0);
    var afterAfterTomorrowIcon = "wi wi-forecast-io-" + data.daily.data[3].icon;
    $("#afterAfterTomorrowC").html("<br>"+ afterAfterTomorrowMinTemp + "&deg;/"+ afterAfterTomorrowMaxTemp +"&deg; <br> <i class=\"" + afterAfterTomorrowIcon + "\" id=\"smallIcon\">");
    }
};
xhrWeather.send();

}());