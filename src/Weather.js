import React, { useState } from "react";
import App from "./App";
import "./Weather.css"; 
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Weather (props){
  const [weatherData, setWeatherData] = useState({ ready: false }); 
  const [city, setCity] = useState(props.defaultCity); 

    function handleResponse(response) {
      setWeatherData({
        ready: true,
        coordinates: response.data.coord, 
        temperature: response.data.main.temp, 
        humidity: response.data.main.humidity, 
        date: new Date(response.data.dt * 1000), 
        description: response.data.weather[0].description, 
        icon: response.data.weather[0].icon, 
        wind: response.data.wind.speed, 
        city: response.data.name,
      }); 
    }

    function handleSubmit(event) {
      event.preventDefault(); 
      search(); 
    }

    function handleCityChange(event) {
      setCity(event.target.value); 
    }

    function search() {
      const apiKey = "116390a0e4a4a5a1b58dd99c1f83f002"; 
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`; 
      axios.get(apiUrl).then(weatherData); 

    }

    if (weatherData.ready) {
    return (
      <div className = "Weather">
        <form className="mb-3" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city.."
                className="form-control"
                autoComplete="off"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
          
        </form>
        <WeatherInfo data={weatherData} />
        </div>
        ); 
}
}

  //imgUrl:
   // "https://creazilla-store.fra1.digitaloceanspaces.com/icons/7911203/weather-icon-md.png",
