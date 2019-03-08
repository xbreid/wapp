import React, { Component } from 'react';
import SearchBar from '../src/components/SearchBar';
import zipcodes from 'zipcodes';
import Spinner from '../src/components/Spinner';
import WeatherInfo from '../src/components/WeatherInfo';
import WeatherBar from '../src/components/WeatherBar';
import Header from '../src/components/Header';

const STATIC_TOKEN = 'WorkingWithSyntxWouldBeAGreatOpportunity';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
      isSearchActive: false,
      woeId: '',
      weatherInfo: null,
      loading: false,
    }
  };

  componentDidMount() {
    setTimeout(() => this.setState({isSearchActive: true}), 100);
  }

  searchByZipCode = (zipCode) => {
    const zipInfo = zipcodes.lookup(parseInt(zipCode, 10));
    const endpoint = `/api/search/latlong/${zipInfo.latitude},${zipInfo.longitude}`;
    const bearer = `Bearer ${STATIC_TOKEN}`;

    fetch(endpoint, {
      method: 'GET',
      withCredentials: true,
      credentials: 'include',
      headers: {
        'Authorization': bearer,
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(data => this.fetchByWoeId(data[0].woeid))
      .catch(err => console.log(err));
  };

  searchByCity = (city) => {
    const endpoint = `/api/search/city/${city}`;
    const bearer = `Bearer ${STATIC_TOKEN}`;

    fetch(endpoint, {
      method: 'GET',
      withCredentials: true,
      credentials: 'include',
      headers: {
        'Authorization': bearer,
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(data => this.fetchByWoeId(data[0].woeid))
      .catch(err => this.setState({isSearchActive: true, searchInput: ''}));
  };

  fetchByWoeId = (woeId) => {
    this.setState({loading: true});
    const endpoint = `/api/location/${woeId}`;
    const bearer = `Bearer ${STATIC_TOKEN}`;

    fetch(endpoint, {
      method: 'GET',
      withCredentials: true,
      credentials: 'include',
      headers: {
        'Authorization': bearer,
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(data => this.setState({weatherInfo: data, loading: false}))
      .catch(err => console.log(err));
  };


  handleChange = (event) => {
    this.setState({searchInput: event.target.value});
  };

  handleSubmit = (event) => {
    const { searchInput } = this.state;
    const isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(searchInput);

    if (isValidZip) {
      this.searchByZipCode(searchInput);
      this.setState({isSearchActive: false, searchInput: ''});
    }
    else if (searchInput.length > 0 && /\S/.test(searchInput)) {
      this.searchByCity(searchInput);
      this.setState({isSearchActive: false, searchInput: ''})
    }
    else {
      // error handle
    }
    event.preventDefault();
  };

  handleBackButton = () => {
    this.setState({weatherInfo: null});
    setTimeout(() => this.setState({isSearchActive: true}), 200);
  };

  render() {
    const { searchInput, isSearchActive, weatherInfo, loading } = this.state;

    return (
      <div className="app__wrapper">
        { !isSearchActive && weatherInfo &&
          <Header city={weatherInfo.title} handleBack={this.handleBackButton}/>
        }
        <SearchBar
          handleChange={(e) => this.handleChange(e)}
          handleSubmit={(e) => this.handleSubmit(e)}
          value={searchInput}
          isActive={isSearchActive}
        />
        { weatherInfo &&
          <>
            <WeatherInfo
              state={weatherInfo.consolidated_weather[0].weather_state_name}
              temp={Math.round(weatherInfo.consolidated_weather[0].the_temp * 9 / 5 + 32)}
            />
            <WeatherBar weatherInfo={weatherInfo} />
          </>
        }
        {loading && <Spinner />}
      </div>
    );
  }
}

export default App;
