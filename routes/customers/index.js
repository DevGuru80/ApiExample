const allcustomers=require("./all");
const singlecust=require("./single");

const routers = require('express').Router();

routers.use('/:custId',singlecust);
routers.use('/',allcustomers);

module.exports=routers;