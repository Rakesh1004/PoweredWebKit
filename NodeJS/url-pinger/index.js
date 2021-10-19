// REQUIRE STATEMENTS
const express = require("express");
const hbs = require("hbs");
const bodyparser = require("body-parser");
const path = require("path");
const ping =  require('ping');


// EXPRESS
const app = express();
const PORT = process.env.PORT || 3000;

// PATH

const publicDirectoryPath = path.join(__dirname, "./assets");
const viewsPath = path.join(__dirname, "./templates/views");
const partialsPath = path.join(__dirname, "./templates/partials");

// HANDLE BAR SETUP
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);
app.use(express.static(publicDirectoryPath));

// MIDDLEWARES
app.use(bodyparser.json());
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: false }));

// METHODS

app.get('/', (req, res) => {
    res.render('home', {
        title: 'Home',
    });
});

app.get('/:url', (req, res) => {
    const URL = req.params.url;

    const PING = async (url) => {
      const response =  await ping.promise.probe(url);
        
      const data = {
          "avg": response.avg,
          "packetLoss": response.packetLoss,
          "host": response.host,
          "alive": response.alive,
          "numHost": response.numeric_host
      }
      res.json(data);
    };

    PING(URL);
});
app.listen(PORT, () => {
    console.log(`Server started on the PORT ${PORT}`);
  });