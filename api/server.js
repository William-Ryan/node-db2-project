const express = require('express');
const helmet = require('helmet');

const carsRouter = require('../car-dealers/cars-router.js')

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/cars', carsRouter)

module.exports = server;