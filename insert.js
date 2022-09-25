const conect=require('./mongodb');
const insert= async ()=>{
    const db= await conect();
    const result = await db.insertMany(
      [{name:"Shahab AK ", rollno:423,section:"B"},
      {name:"Maha ", rollno:873,section:"B"},
      {name:"Naila ", rollno:875,section:"B"} ]

    );
if (result.acknowledged)    
{
    console.log("Data is inserted");
}
}
insert(); 