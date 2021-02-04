// my personal api key :bffdf147c85f76b974e17ad20594acc2
// search by city : api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const apiKey = 'bffdf147c85f76b974e17ad20594acc2';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const getWeatherData = city => {
    const url = `${apiUrl}?q=${city}&units=metric&appid=${apiKey}`;
    fetch(url)
        .then(response => response.json())
        .then(data => updateWeather(data))

}


function searchCity() {
    const searchCity = document.getElementById('search-city').value;
    getWeatherData(searchCity);
    searchCity.innerText = '';
}

const updateWeather = data => {
    const cityName = document.getElementById('city-name');
    const temp = document.getElementById('temperature');
    const status = document.getElementById('weather-status');
    const feelsLike = document.getElementById('feelsLike');
    feelsLike.innerText = data.main.feels_like;
    document.getElementById('icon').setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    cityName.innerText = data.name;
    temp.innerText = data.main.temp;
    status.innerText = data.weather[0].main;

}

getWeatherData('comilla');