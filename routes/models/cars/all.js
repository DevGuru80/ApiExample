const data = require('../../../data.json');

const a = (req, res) => {
  const modelId = req.params.modelId * 1;
  const cars = data.cars.filter(c => c.modelId === modelId);

  res.status(200).json({ cars });
};

module.exports=a;