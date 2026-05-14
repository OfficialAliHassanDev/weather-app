const apiKey = "ae0f22a5b633ecbe68f92f7593adc5a9";

const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");

const temp = document.querySelector(".temp");
const city = document.querySelector(".city");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(cityName) {

  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;
  const response = await fetch(apiURL);
  const data = await response.json();

  console.log(data);

  temp.innerHTML = Math.round(data.main.temp) + "°C";
  city.innerHTML = data.name;
  humidity.innerHTML = data.main.humidity + "%";
  wind.innerHTML = data.wind.speed + " km/h";

  const weatherMain = data.weather[0].main;

  if(weatherMain === "Clouds") {
    weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/414/414825.png";
  }
  else if(weatherMain === "Clear") {
    weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/869/869869.png";
  }
  else if(weatherMain === "Rain") {
    weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/3351/3351979.png";
  }
  else if(weatherMain === "Drizzle") {
    weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/3075/3075858.png";
  }
  else if(weatherMain === "Mist") {
    weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/4005/4005901.png";
  }

}

searchBtn.addEventListener("click", () => {

  checkWeather(cityInput.value);

});

cityInput.addEventListener("keypress", (e) => {

  if(e.key === "Enter") {
    checkWeather(cityInput.value);
  }

});

checkWeather("Lahore");