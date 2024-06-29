import React, { useState, useEffect } from "react";
import "./../styles/App.css";
import WeatherDisplay from './WeatherDisplay';

const App = () => {
  const [weather, setWeather] = useState({ temperature: 0, conditions: "" });

  useEffect(() => {
    // Simulate fetching weather data
    const weatherInput = { temperature: 25, conditions: "Sunny" };
    setWeather(weatherInput);
  }, []);

  return (
    <div className="App">
      <WeatherDisplay weather={weather} />
    </div>
  );
};

export default App;
