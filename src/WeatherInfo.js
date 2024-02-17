import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";


export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <div className="container">
            <h1>{props.data.city}</h1>
            
            <ul>
                <li>
                    <FormattedDate date={props.data.date} />
                </li>
                <li>{props.data.description}</li>
            </ul>
        <div className="row">
                <div className="col-6">
                    <div className="clearfix weather-temperature">
                      
                    </div>
                    <div>
                        <WeatherTemperature/> 
                    </div>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Humidity: {props.data.humidity}%</li>
                        <li>Wind: {props.data.wind} km/h</li>
                    </ul>
                    <h2>Winter Weather</h2>
                </div>
            </div>
            </div>
      </div>
    );
  }