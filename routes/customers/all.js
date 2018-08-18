const data=require('../../customer.json');

const getAll=(req,res)=>{


 const customers = data.customers;

  res.status(200).json({ customers });


}

module.exports=getAll;
