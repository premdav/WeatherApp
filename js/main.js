$(document).ready(function () {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getWeather);
        }
        else {
            alert("Geolocation not currently available");
        }

        function getWeather(position) {
            // set latitude and longitude to user's location
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            // output variables to console
            console.log(lat + ',' + lon);
            let urlApi = "https://fcc-weather-api.glitch.me/api/current?lat=" + lat
                + "&lon=" + lon;
            // logging url to the console
            console.log(urlApi);
            $.getJSON(urlApi, function(json) {
                console.log(json);
                $(".cityName").html(json.name);
                $(".temp").html(json.main.temp + "&deg;C");
                $(".weather").html(json.weather[0].description);

                let myWeather = json.weather[0].description;
                if(myWeather === "clear sky") {
                    $(".my-icon").addClass("wi-sunny");
                }
                else if(myWeather === "few clouds") {
                    $(".my-icon").addClass("wi-day-cloudy");
                }
                else if(myWeather === "scattered clouds") {
                    $(".my-icon").addClass("wi-cloud");
                }
                else if(myWeather === "shower rain") {
                    $(".my-icon").addClass("wi-showers");
                }
                else if(myWeather === "broken clouds") {
                    $(".my-icon").addClass("wi-cloudy");
                }
                else if(myWeather === "rain") {
                    $(".my-icon").addClass("wi-rain");
                }
                else if(myWeather === "thunderstorm") {
                    $(".my-icon").addClass("wi-thunderstorm");
                }
                else if(myWeather === "snow") {
                    $(".my-icon").addClass("wi-snow");
                }
                else if(myWeather === "mist") {
                    $(".my-icon").addClass("wi-fog");
                }

            });
        }
});