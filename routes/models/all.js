const data = require('../../data.json');

const allcars = (req, res) => {
  const models = data.models;

  res.status(200).json({ models });
};

module.exports=allcars;