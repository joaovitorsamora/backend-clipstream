const express = require('express');
const cors = require('cors');
const routes = require('./router');
const bodyParser = require('body-parser');
require('dotenv/config');
require('pg');
require('./database');

const PORT = process.env.PORT;

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(routes);


module.exports = app;
