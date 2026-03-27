"use strict";

function getWeather () {
	let weatherSection = document.getElementById("weather");
	let output = "";
	weatherSection.innerHTML = "";
	let apiKey = "1a2f192b5ee7b7c7d8e5d25e12abc14c";
	let imgUrlStart = "http://openweathermap.org/img/wn/";
	let imgUrlEnd = "@2x.png";
	let endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=50.684793&lon=-114.232645&units=metric&appid=${apiKey}`;
	let xhr = new XMLHttpRequest();
	
	xhr.addEventListener("load", function() {
		if(this.status == 200) {
			console.log(this.response);
			let ms = this.response.dt * 1000;
			let date = new Date(ms);
			ms = this.response.sys.sunrise * 1000;
			let rise = new Date(ms);
			ms = this.response.sys.sunset * 1000;
			let set = new Date(ms);
			let iconCode = this.response.weather[0].icon;
			let iconUrl = `${imgUrlStart}${iconCode}${imgUrlEnd}`;
			
			output += `<h2>${this.response.name}</h2>
								<img src="${iconUrl}" alt="${this.response.weather[0].main}">
								<dl>
									<dt>Current Weather:</dt>
									<dd>${this.response.weather[0].description}</dd>
									<dt>Current Temp:</dt>
									<dd>${Math.round(this.response.main.temp)}&deg;C</dd>
									<dt>Feels Like:</dt>
									<dd>${Math.round(this.response.main.feels_like)}&deg;C</dd>
									<dt>Maximum Temp:</dt>
									<dd>${Math.round(this.response.main.temp_max)}&deg;C</dd>
									<dt>Minimum Temp:</dt>
									<dd>${Math.round(this.response.main.temp_min)}&deg;C</dd>
									<dt>Wind Speed:</dt>
									<dd>${Math.round(this.response.wind.speed)} m/s</dd>
								</dl>`;
			
			weatherSection.innerHTML = output;
		} else {
			weatherSection.innerHTML = "There was an issue calling the Open Weather API.";
		}
	});
	
	xhr.responseType = "json";
	xhr.open("GET", endpoint);
	xhr.send();
}

getWeather();