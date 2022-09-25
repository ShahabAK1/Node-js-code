module.exports= reqFilter=((req,resp,next)=>{
   if(!req.query.age)
   {
    resp.send("provide age")
   }
   else if(req.query.age<18)
   {
    resp.send("yoe cant accress this")
   }
  else
  {
    next();
  }
})