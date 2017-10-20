// This code runs when the "Get the weather!" button is clicked
let handleWeatherResponse = function(response) {
  console.log(response)
}

// This code runs when the page loads
window.onload = function() {
  document.getElementById("get-the-weather").addEventListener("click", function(event) {
    event.preventDefault();
    let locationName = document.getElementById("location-name").value;
    geocodeAndGetWeather(locationName);
  });
}
