const {MongoClient}=require('mongodb');
const url='mongodb://localhost:27017';
const database='School'
const connection=new MongoClient(url);

async function conect()
{
    let connecting_db= await connection.connect();
    let db= connecting_db.db(database);
    return collection= db.collection('Students');
   
}
module.exports=conect;