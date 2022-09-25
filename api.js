const express=require('express');
const conect=require('./mongodb');
const mongodb=require('mongodb');
const app=express();

app.use(express.json());

app.get('/', async(req, resp) => {
    let data=await conect();
    data=await data.find().toArray();
    console.log(data);
    resp.send(data);
})

app.post('/', async(req,resp)=>{
    let data=await conect();
    let result= await data.insertOne(req.body);
    resp.send(result);
})

app.put('/:name',async(req,resp)=>{
    let data=await conect();
    let result=await data.updateOne(
        {name: req.params.name},
        {$set:req.body}
    )
    resp.send("update");
})
app.delete('/:id',async(req,resp)=>{
    console.log(req.params.id)
    let data=await conect();
    let result= await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)});  
    resp.send("DELETE DONE")
})
 app.listen(5000);