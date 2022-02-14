let city_name = document.getElementById("city_name");
let weather_type = document.getElementById("weather_type");
let temp = document.getElementById("temp");

let max_temp = document.getElementById("max_temp");

let api_key = "7ec23a03107574af82e7240caf719b7b";

getWeatherData = (city) => {
  const url = "https://api.openweathermap.org/data/2.5/weather";
  const full_url = `${url}?q=${city}&appid=${api_key}&units=imperial`;
  const weatherPromise = fetch(full_url);

  return weatherPromise.then((responce) => {
    return responce.json();
  });
};

function searchCity() {
  let city = document.getElementById("city").value;

  getWeatherData(city).then((responce) => {
    showWeather(responce);
  });
  // .catch((err) => {
  //   alert(err);
  // });
}

showWeather = (weatherData) => {
  city_name.innerText = weatherData.name;
  weather_type.innerText = weatherData.weather[0].main;
  temp.innerText = weatherData.main.temp;
  max_temp.innerText = weatherData.main.temp_max;
};
