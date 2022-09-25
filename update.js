const conect=require('./mongodb');
const update = async ()=>{
        let data= await conect();
        let result=await data.updateOne(
        {name:'Maha '},{ 
            $set: { name:'Maha Shahab' } }
    );
     console.warn(result);

}
update();