const cityName = document.querySelector('.data__city')
const temperature = document.querySelector('.data__temperature')
const humidity = document.querySelector('.data__humidity')
const pressure = document.querySelector('.data__pressure')
const wind = document.querySelector('.data__wind')

const searchInput = document.querySelector('.search__input')
const searchBtn = document.querySelector('.search__btn')

function generateURL(e) {
   
    let inputValue = searchInput.value;

    if (inputValue.trim() !== '') {

        const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(inputValue)}&appid=acf709db91e49f5337c3dbe0bcb65d33&units=metric`;

        fetch(apiURL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('HTTP error ' + response.status);
                }
                return response.json()
            })
            .then(data => {
                console.log(data)
                cityName.textContent = data.name;
                temperature.textContent = Math.round(data.main.temp) + "°C";
                humidity.textContent = 'Humidity:' + " " + data.main.humidity + "%";
                pressure.textContent = 'Pressure:' + " " + data.main.pressure + " " + "hPa";
                wind.textContent = 'Wind:' + " " + data.wind.speed + " " + "km/h";
            })
            .catch(error => {
                console.error("Error: " + error.message);
            })
    }
}
searchBtn.addEventListener('click', generateURL)