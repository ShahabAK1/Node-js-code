const conect=require('./mongodb');
const del=async ()=>{
    const data= await conect();
    let result= await data.deleteMany({name:'Shahab AK '})
    console.warn(result);
    if(result.acknowledged)
    {
        console.log("deleted ");
    }
} 
del();