const cars = require('express').Router({ mergeParams: true });
const all = require('./all');
const singlecar=require('./singlecar')

cars.get('/:carId', singlecar);
cars.get('/', all);

module.exports = cars;