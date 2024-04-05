document.addEventListener("DOMContentLoaded", function () {
  const apiKey = "653e583349684a3fe769df21f5fced6c";
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
  const searchBox = document.querySelector(".search input");
  const searchBtn = document.querySelector(".search button");
  const weatherIcon = document.querySelector(".weather-icon");

  async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
      document.querySelector(".error").style.display = "block"; // Corrected selector
      document.querySelector(".weather").style.display = "none"; // Corrected selector
    } else {
      var data = await response.json();

      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML =
        Math.round(data.main.temp) + "°c";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
      if (data.weather[0].main == "Haze") {
        weatherIcon.src = "Images/haze.png";
      } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "Images/clear.png";
      } else if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "Images/clouds.png";
      } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "Images/drizzle.png";
      } else if (data.weather[0].main == "Humidity") {
        weatherIcon.src = "Images/humidity.png";
      } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "Images/mist.png";
      } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "Images/rain.png";
      } else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "Images/snow.png";
      } else if (data.weather[0].main == "Wind") {
        weatherIcon.src = "Images/wind.png";
      }
      document.querySelector(".weather").style.display = "block";
      document.querySelector(".error").style.display = "none"; // Corrected selector
    }
  }
  searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
  });
});
