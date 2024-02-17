import React from "react";
import "./App.css";  
import Weather from "./Weather"; 
import WeatherTemperature from "./WeatherTemperature";




export default function App() {
  return (
    <div className="App">
      <div className="container">
     
        <Weather defaultCity="Tampa" />
     
       
      <WeatherTemperature/>
    
    <footer>
              This project was coded by Erin Aviles and is {" "} <a href="https://github.com/erinaviles83/react-wk5-project"> open-sourced on GitHub ☀️</a>
            </footer>
    </div>
    </div>
  )
  };

