import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";



export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            
            <h1>{props.data.city}</h1>
         
            <ul>
                <li>
                    <FormattedDate date={props.data.date} />
                </li>
                <li>{props.data.description}</li>
            </ul>
        <div className="row">
                <div className="col-6">
                    <div className="d-flex">
                    </div>
                    <div>
                        <WeatherTemperature imperial={props.data.temperature} />
                    </div>
               
                </div>
                <div className="col-6">
                    <ul>
                        <li>Humidity: {props.data.humidity}%</li>
                        <li>Wind: {props.data.wind} km/h</li>
                    </ul>
                </div>
         
            </div>
      </div>
    );
  }