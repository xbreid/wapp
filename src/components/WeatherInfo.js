import React from 'react';
import posed from 'react-pose';
import WeatherIcon from "./WeatherIcon";

const config = {
  open: {y: 0, opacity: 1},
  closed: {y: 40, opacity: 0}
};

  const Weather = posed.div({
  open: {
    delayChildren: 300,
    staggerChildren: 100
  },
  closed: {
    delayChildren: 300,
    staggerChildren: 100
  }
});

const Icon = posed.div(config);
const Temp = posed.h1(config);
const State = posed.p(config);

class WeatherInfo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({isActive: true}), 200);
  }

  render() {
    const { state, temp } = this.props;
    const { isActive } = this.state;
    return (
      <Weather className="weather-info" pose={isActive ? 'open' : 'closed'}>
        <Icon>
          <WeatherIcon weatherState={state} className="weather-info__icon" />
        </Icon>
        <Temp className="weather-info__temp">
          {temp}&deg;
        </Temp>
        <State className="weather-info__state">{state}</State>
      </Weather>
    );
  }
}

export default WeatherInfo;
