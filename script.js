const key= '2da5242366dc0ac8704f39de27ff7503';
const ApiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox= document.querySelector(".search-wrapper input");
const searchBtn= document.querySelector(".search-wrapper button");


async function checkWeather(city){
    const response = await fetch(ApiUrl+ city +`&APPID=2da5242366dc0ac8704f39de27ff7503`);
    var data = await response.json();
    console.log(data);


    document.querySelector(".city").innerHTML=data.name 
    document.getElementById("temperature").innerHTML= Math.round(data.main.temp)+ "&#176c"
    document.getElementById("windspeed").innerHTML=data.wind.speed + " km/h"
    document.getElementById("humidity").innerHTML=data.main.humidity+ " %"
    document.getElementById("min-temperature").innerHTML=data.main.temp_min+ "&#176c"
    document.getElementById("max-temperature").innerHTML=data.main.temp_max+ "&#176c"
}




searchBtn.addEventListener("click", () =>{
    checkWeather(searchBox.value);
} )

searchBox.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        checkWeather(searchBox.value);
    }
});