import React from "react";
import "./App.css";  
import Weather from "./Weather";



export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tampa" />
        <h2>Winter Weather</h2>
        <div className="WeatherTemperature">
        <div className="float-left">
        <span className="units">
            <a href="/">°C</a> | <a href="/">°F</a>
        </span>
    </div>
    </div>
    <footer>
              This project was coded by Erin Aviles and is {" "} <a href="https://github.com/erinaviles83/react-wk5-project"> open-sourced on GitHub ☀️</a>
            </footer>
    </div>
    </div>
  )
  };

