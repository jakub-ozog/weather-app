"use strict";

var cityName = document.querySelector('.data__city');
var temperature = document.querySelector('.data__temperature');
var humidity = document.querySelector('.data__humidity');
var pressure = document.querySelector('.data__pressure');
var wind = document.querySelector('.data__wind');
var searchInput = document.querySelector('.search__input');
var searchBtn = document.querySelector('.search__btn');

function generateURL(e) {
  e.preventDefault();
  var inputValue = searchInput.value;

  if (inputValue.trim() !== '') {
    var apiURL = "https://api.openweathermap.org/data/2.5/weather?q=".concat(encodeURIComponent(inputValue), "&appid=acf709db91e49f5337c3dbe0bcb65d33&units=metric");
    fetch(apiURL).then(function (response) {
      if (!response.ok) {
        throw new Error('HTTP error ' + response.status);
      }

      return response.json();
    }).then(function (data) {
      console.log(data);
      cityName.textContent = data.name;
      temperature.textContent = Math.round(data.main.temp) + "°C";
      humidity.textContent = data.main.humidity + "%";
      pressure.textContent = data.main.pressure + " " + "hPa";
      wind.textContent = data.wind.speed + " " + "km/h";
    })["catch"](function (error) {
      console.error("Error: " + error.message);
    });
  }
}

searchBtn.addEventListener('click', generateURL);