import React from "react";
import App from "./App";
import "./Weather.css"; 
import axios from "axios";

export default function Weather (){
    function weatherData(response) {
        console.log(response.data); 
    }




    const apiKey = "5354b60afda2b7800186c06153932396"; 
    let city = "Tampa"; 
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`; 
    axios.get(apiUrl).then(weatherData); 
    return (
      <div className="container">
        <form className="mb-3">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city.."
                className="form-control"
                autoComplete="off"
                autoFocus="on"
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
        <div className="overview">
          <h1>{weatherData.city}</h1>
          <ul>
            <li>Last updated: {weatherData.date}</li>
            <li>{weatherData.description}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="clearfix weather-temperature">
              <img
                src={weatherData.imgUrl}
                alt={weatherData.description}
                className="float-left"
              />
              <div className="float-left">
                <strong>{weatherData.temperature}</strong>
                <span className="units">
                  <a href="/">°C</a> | <a href="/">°F</a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
      </div>
      </div>
    );
  }

    // city: "Tampa",
 // temperature: 65,
  //date: "Thursday 9:30",
  //description: "Clear",
  //imgUrl:
   // "https://creazilla-store.fra1.digitaloceanspaces.com/icons/7911203/weather-icon-md.png",
  //humidity: 60,
  //wind: 20