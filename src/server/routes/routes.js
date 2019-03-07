const WeatherService = require("../services/weather");

const STATIC_TOKEN = 'WorkingWithSyntxWouldBeAGreatOpportunity';

const checkAuth = (auth) => {
  let authToken;
  if (auth) {
    authToken = auth.substr(auth.indexOf(' ') + 1);
  }

  return STATIC_TOKEN === authToken;
};

const Routes = (app) => {

  app.get("/api/search/latlong/:query", (req, res) => {
    const auth = req.headers.authorization;
    if (!checkAuth(auth)) {
      return res.status(401).send('Not Authorized');
    }

    WeatherService.searchByLatLong(req.params.query, (error, result) => {
      if (error) {
        return res.status(400).send(error);
      }
      res.send(result);
    });
  });

  app.get("/api/search/city/:query",  (req, res) => {
    const auth = req.headers.authorization;
    if (!checkAuth(auth)) {
      return res.status(401).send('Not Authorized');
    }

    WeatherService.searchByCity(req.params.query, (error, result) => {
      if(error) {
        return res.status(400).send(error);
      }
      res.send(result);
    });
  });


  app.get("/api/location/:query",  (req, res) => {
    const auth = req.headers.authorization;
    if (!checkAuth(auth)) {
      return res.status(401).send('Not Authorized');
    }

    WeatherService.getLocation(req.params.query, (error, result) => {
      if(error) {
        return res.status(400).send(error);
      }
      res.send(result);
    });
  });

};

module.exports = Routes;
