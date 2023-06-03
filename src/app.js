const express =require('express')
const mongoose = require('mongoose')
const path = require('path')
const hbs=require("hbs")
const fetch= require('node-fetch');
const Data=require('./mogo');


const app = express()


async function getPosts(){
    const mypost=await fetch("https://api.wazirx.com/api/v2/tickers");
    const response = await mypost.json();
    
          ans= Object.keys(response);
          for(let i=0;i<10;i++){
    
          const data =new Data ({
             name:response.ans[i].name,
             last:response.ans[i].last,
             buy:response.ans[i].buy,
             sell:response.ans[i].sell,
             volume:response.ans[i].volume,
             base_unit:response.ans[i].base_unit,
          });
        data.save();
    }
}    
         
        


const tempelatePath=path.join(__dirname,'../tempelates')
app.use(express.json())
app.set("view engine","hbs")
app.set("views",tempelatePath)
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'../public')));


// app.get('/', (req, res) => {
    
// })

app.get("/",(req,res)=>{
Data.find().then(result=>{
        res.render("home",{result})
       
    })
    
  
})



app.listen(3000,()=>{
    console.log("server started successfully");
    })