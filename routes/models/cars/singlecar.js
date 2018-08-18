const data = require('../../../data.json');


const singleCar=(req,res)=>{
    
    const carId = req.params.carId * 1;
    const modelId = req.params.modelId * 1;
    const car = data.cars.find(m => m.id === carId && m.modelId == modelId );
    res.status(200).json({ car });
}

module.exports=singleCar;