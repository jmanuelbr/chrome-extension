import axios from 'axios';
import $ from 'jquery';

const WEATHER_FEED = "https://api.darksky.net/forecast/e9231a0d68ba35226274ad3b5e1f6dc4/51.5177896,0.1085338000000000?callback=?&units=uk";

export const weatherHtml = `<div class="weather--container">
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

// ******************************************************************
//  Weather widget
// ******************************************************************

export const weatherRequest = () => {
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