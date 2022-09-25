const conect=require('./mongodb');
const main= async ()=>{
    let data= await conect();
    data= await data.find().toArray();
    console.warn(data);
}
main();











//MONGO COLLECTIONS
/*const {MongoClient}=require('mongodb');
const url='mongodb://localhost:27017';
const database='e-comm'
const connection=new MongoClient(url);

async function getdata()
{
let result = await connection.connect();
let db = result.db(database);
let collection = db.collection('products');
let response= await collection.find({}).toArray();
console.log(response);
}
getdata();*/

/*const e = require('express');
const express=require('express');
const { request } = require('http');
const reqFilter=require('./middleware');
const route=express.Router();
const app=express();
route.use(reqFilter)
//\\app.use(reqFilter)

app.get('/',(req,resp)=>{
    resp.send("Welcom to HP");
})
route.get('/User',(req,resp)=>{
    resp.send("Welcom to Useer");
})
route.get('/About',(req,resp)=>{
    resp.send("Welcom to About");
})
app.listen(4000);
app.use('/',route);*/




//4th slot
/*const express=require('express');
const path=require('path');

const app=express();
const dirname=path.join(__dirname,'public');
//app.use(express.static(dirname));
app.set('view engine','ejs');

app.get('/profile',(_,resp)=>{
   const pname={
        name: 'Shahab A.K',
        contact:'645655635',
        sweeto:'shafiqu',
        skills:['s','d','g','e']
    }
    resp.render('profile',{pname});
    })
app.get('/login',(_,resp)=>{
    resp.render('login');
})

app.get('/about',(_,resp)=>{
resp.sendFile(`${dirname}/about.html`);
})
app.get('/index',(_,resp)=>{
    resp.sendFile(`${dirname}/index.html`);
    })
app.get('/about',(_,resp)=>{
resp.sendFile(`${dirname}/about.html`);
})
app.get('*',(_,resp)=>{
    resp.sendFile(`${dirname}/Npage.html`);
    })
app.listen(4455);*/

//3rd slot
/*const express=require('express');
const app= express();
app.get("",(req,resp)=>{
    resp.send(`
    <h1>'Welcome to homepage'<h1>
    <a href="/About" > go to About </a>

    `);

});
app.get('/About',(req,resp)=>{
    resp.send(`
    <input type="text" placeholder="name" />
    <button>click me</button>
    <a href="/" > go to homepage</a>
    `);
});
app.get('/Help',(req,resp)=>{
    resp.send("this is help page");
});
app.listen(4500);
*/

//2nd slot
/*let a=13;
let b=5;
let wait =new Promise((resolve,reject)=>{
setTimeout(()=>{
    resolve(34)
},2000)
})
wait.then((data)=>{
b=data;
console.log(a-b)
})*/

//1st code
/*const fs=require('fs');
const path=require('path');
const dirname=path.join(__dirname,'crud');
const filepath=`${dirname}/apple.txt`;*/
//fs.writeFileSync(filepath,"thos re ae re ");
//fs.readFile(filepath,'utf8',(err,item)=>{
  //  console.log(item)
//})
//fs.appendFile(filepath,"this is mty append file ",(err)=>{
   // if(!err) console.log("this is updated")
//})
//fs.rename(filepath,`${dirname}/shafiqa.txt`,(err)=>{
   // if(!err) console.log("shafiqa is q")
//})
//fs.unlinkSync(`${dirname}/shafiqa.txt`);