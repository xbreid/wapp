import React from 'react';

const WeatherIcon = ({weatherState, className}) => {
  switch (weatherState) {
    case "Snow": {
      return <i className={`wi wi-snow ${className}`} />;
    }
    case "Sleet": {
      return <i className={`wi wi-sleet ${className}`} />;
    }
    case "Hail": {
      return <i className={`wi wi-hail ${className}`} />;
    }
    case "Thunder": {
      return <i className={`wi wi-thunderstorm ${className}`} />;
    }
    case "Heavy Rain": {
      return <i className={`wi wi-rain ${className}`} />;
    }
    case "Light Rain": {
      return <i className={`wi wi-sprinkle ${className}`} />;
    }
    case "Showers": {
      return <i className={`wi wi-showers ${className}`} />;
    }
    case "Heavy Cloud": {
      return <i className={`wi wi-cloudy ${className}`} />;
    }
    case "Light Cloud": {
      return <i className={`wi wi-cloud ${className}`} />;
    }
    case "Clear": {
      return <i className={`wi wi-wu-clear ${className}`} />;
    }
    default: {
      return null;
    }
  }
};

export default WeatherIcon;
