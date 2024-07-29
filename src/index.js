const express = require('express');
const cors = require('cors');
const routes = require('./router');
const bodyParser = require('body-parser');

require('./database')

const app = express();
app.use(bodyParser.json());

app.use(cors());  
app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log('Servidor rodando na porta 3333'));