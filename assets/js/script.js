var ApiKey = '945c64abb8a421a02d4a649310f9c495';
var city;
var queryUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Atlanta&appid=945c64abb8a421a02d4a649310f9c495';
fetch(queryUrl)
console.log(queryUrl)
var fiveday;

var resultTextEl = document.querySelector('#result-text');
var resultContentEl = document.querySelector('#result-content');
var searchFormEl = document.querySelector('#search-box');

let weather = {
    'ApiKey': '945c64abb8a421a02d4a649310f9c495',
    fetchWeather: function(city) {
        fetch(
            'https://api.openweathermap.org/data/2.5/weather?q=' 
            + city 
            + '&units=imperial&appid=' 
            + ApiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector('.city').innerText = '' + name;
        document.querySelector('.icon').src = 'https://openweathermap.org/img/wn/' + icon + '.png';
        document.querySelector('.description').innerText = description;
        document.querySelector('.temp').innerText = 'Temp:' + temp + '°F';
        document.querySelector('.wind').innerText = 'Wind' + speed + 'mph';
        document.querySelector('.humidity').innerText = 'Humidity:' + humidity + '%';
    },
    search: function() {
        this.fetchWeather(document.querySelector('#search-bar').value);
    }
};

let forecast = {
    'ApiKey': '945c64abb8a421a02d4a649310f9c495',
    fetchForecast: function(fiveday) {
        fetch('https://api.openweathermap.org/data/2.5/forecast?q=' 
        + fiveday 
        + '&units=imperial&appid=' 
        + this 
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayForecast: function(data) {
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector('.city').innerText = '' + name;
        document.querySelector('.icon').src = 'https://openweathermap.org/img/wn/' + icon + '.png';
        document.querySelector('.description').innerText = description;
        document.querySelector('.temp').innerText = 'Temp:' + temp + '°F';
        document.querySelector('.wind').innerText = 'Wind' + speed + 'mph';
        document.querySelector('.humidity').innerText = 'Humidity:' + humidity + '%';
    },
    search: function() {
        this.fetchWeather(document.querySelector('#search-bar').value);
    }
};

document.querySelector('#search-box button').addEventListener('click', function (event) {
event.preventDefault()
    weather.search();
});