$(document).ready(function () {
        // getting location data
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getWeather);
        }
        else {
            alert("Geolocation not available");
        }

        function getWeather(position) {
            // preset latitude and longitude in case of geolocation failure
            let lat = 48.8566;
            let lon = 2.3522;

            // set latitude and longitude to user's location
            lat = position.coords.latitude;
            lon = position.coords.longitude;
            // output variables to console
            console.log(lat, lon);
            let urlApi = "https://fcc-weather-api.glitch.me/api/current?long=" + lon
                + "&lat=" + lat;
            // logging url to the console
            console.log(urlApi);
        }

        //function currentWeather(data) {
          //  console.log(data);
            //$(".city").html(data.name + ", " + data.sys.country);
        //}
});