import React from "react";
import Weather from "./Weather";
import "./App.css";  



export default function App () {
  return (
    <div className="App">
      <div className="container">
        <Weather weatherData="Tampa" />
  
    <footer>
              This project was coded by Erin Aviles and is {" "} <a href="https://github.com/erinaviles83/react-wk5-project" target="_blank"> open-sourced on GitHub ☀️</a>
            </footer>
    </div>
    </div>
  )
  };

