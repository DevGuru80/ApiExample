const routes = require('express').Router();
const models = require('./models');
const customer= require('./customers');

routes.use('/models', models);
routes.use('/custs', customer);
routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

routes.post('/', (req, res) => {
  res.status(200).json({ message: 'Connected Post!' });
});
module.exports = routes;