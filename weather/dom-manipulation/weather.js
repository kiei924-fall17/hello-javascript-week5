// This code runs when the "Get the weather!" button is clicked
let handleWeatherResponse = function(response) {
  console.log(response);
  document.getElementById("current-conditions-text").innerHTML = response.currently.temperature + " and " + response.currently.summary;
  document.getElementById("current-conditions-icon").innerHTML = icon(response.currently);

  for(let i=1; i<=5; i++) {
    document.getElementById("forecast" + i + "-icon").innerHTML = icon(response.daily.data[i]);
    document.getElementById("forecast" + i + "-temp").innerHTML = response.daily.data[i].temperatureHigh;
    document.getElementById("forecast" + i + "-text").innerHTML = response.daily.data[i].summary;
  }
}

// This code runs when the page loads
window.onload = function() {
  document.getElementById("get-the-weather").addEventListener("click", function(event) {
    event.preventDefault();
    let locationName = document.getElementById("location-name").value;
    geocodeAndGetWeather(locationName);
  });
}
