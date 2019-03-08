import React from 'react';
import moment from "moment";
import posed from 'react-pose';
import WeatherIcon from "./WeatherIcon";

const config = {
  open: {x: 0, opacity: 1},
  closed: {x: 40, opacity: 0}
};

const Block = posed.div(config);

const WeatherBarBlock = ({ date, state, temp }) => (
  <Block className="weather-bar__block">
    <p className="weather-bar__date">{moment(date).format('ddd')}</p>
    <p className="weather-bar__state">{state}</p>
    <WeatherIcon weatherState={state} className="weather-bar__icon" />
    <p className="weather-bar__temp">
      {Math.round(temp * 9 / 5 + 32)}
      &deg;
    </p>
  </Block>
);

export default WeatherBarBlock;
