const express = require('express');
const cors = require('cors');
const routes = require('./router');
const bodyParser = require('body-parser');
require('dotenv/config')
require('./database')

const port = process.env.PORT || 3333;

const app = express();
app.use(bodyParser.json());

app.use(cors());  
app.use(express.json());
app.use(routes);

app.listen(port);