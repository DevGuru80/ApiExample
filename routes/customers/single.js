const data= require('../../customer.json');

const signlecust= (req,res)=>
{
const customers=data.customers;
const custId = req.params.custId * 1;
const customer = customers.find(m=>m.id==custId);

res.status(200).json(customer);

}

module.exports=signlecust;