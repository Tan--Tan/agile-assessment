const fs = require('fs');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const http = require('http');

require('dotenv').config();

const middlewares = require('./middlewares');
const api = require('./api');

const app = express();

const key = fs.readFileSync('key.pem');
const cert = fs.readFileSync('cert.pem');
const server = http.createServer({key: key, cert: cert }, app);

app.use(morgan('dev'));
app.use(helmet());

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
}
app.use(cors(corsOptions));

app.use(express.json());

app.get('/', cors(), (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
  });
});

app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = server;
