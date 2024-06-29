import React from 'react';

function WeatherDisplay({ weather }) {
  const { temperature, conditions } = weather;
  const textColor = temperature > 20 ? 'red' : 'blue';

  return (
    <div>
      <p style={{ color: textColor }}>Temperature: {temperature}</p>
      <p>Conditions: {conditions}</p>
    </div>
  );
}

export default WeatherDisplay;
