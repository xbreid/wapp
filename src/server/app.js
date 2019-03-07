const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const helmet = require('helmet');

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.resolve('build')));

const routes = require("./routes/routes.js")(app);

let server = app.listen(3001, () => {
  console.log("Listening on port %s...", server.address().port);
});
