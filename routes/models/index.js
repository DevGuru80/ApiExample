const single = require('./single')
const all = require('./all');
const cars = require('./cars');


const models = require('express').Router();


models.use('/:modelId/cars', cars);
models.use('/:modelId',single);
models.use('/', all);



module.exports = models;