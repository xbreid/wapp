import React from 'react';
import posed from 'react-pose';
import WeatherBarBlock from "./WeatherBarBlock";

const Bar = posed.div({
  open: {
    delayChildren: 500,
    staggerChildren: 100
  },
  closed: {
    delayChildren: 500,
    staggerChildren: 100
  }
});

class WeatherBar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({isActive: true}), 600);
  }

  render() {
    const { weatherInfo } = this.props;
    const { isActive } = this.state;

    return(
      <Bar className="weather-bar" pose={isActive ? 'open' : 'closed'}>
        { weatherInfo && weatherInfo.consolidated_weather.map((day, index) => {
            if (index !== 0) {
              return (
                <WeatherBarBlock
                  key={day.id}
                  state={day.weather_state_name}
                  date={day.applicable_date}
                  temp={day.the_temp}
                />
              );
            }
            return null;
          })
        }
      </Bar>
    );
  }
}

export default WeatherBar;
