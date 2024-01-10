const Book=require('../models/Book.cjs')

const usersBook= async(req,res)=>{
  try{
    const {name1,no1,date,pickup}=req.body
    const data={
        name:name1,
        no:no1,
        date:date,
        pickup:pickup
    }

     await Book.insertMany([data])
   res.json("Posted")
}
catch(err){
  res.json('error')
}
}

module.exports={usersBook}