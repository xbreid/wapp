const fetch = require('node-fetch');

const Weather = () => {};

const apiRoute = 'https://www.metaweather.com/api/location/';

Weather.searchByLatLong = (query, callback) => {
  fetch(`${apiRoute}search/?lattlong=${query}`)
    .then(res => res.json())
    .then(data => callback(null, data))
    .catch(err => callback(err, null));
};

Weather.searchByCity = (query, callback) => {
  fetch(`${apiRoute}search/?query=${query}`)
    .then(res => res.json())
    .then(data => callback(null, data))
    .catch(err => callback(err, null));
};

Weather.getLocation = (query, callback) => {
  fetch(`${apiRoute}${query}`)
    .then(res => res.json())
    .then(data => callback(null, data))
    .catch(err => callback(err, null));
};


module.exports = Weather;
