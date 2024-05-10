import express from "express";
import bodyParser from "body-parser";

const app=express();
const port=3000;
var brand="";
app.use(bodyParser.urlencoded({extended:true}));
 
function brandname(req,res,next){
    console.log(req.body);
    brand=req.body["street"]+req.body["pet"];
    next();
}
app.use(brandname);
app.get("/",(req,res)=>{
    res.sendFile("C:/Users/Lenovo/backend/9.brand name generator/public/index.html")
})
app.post("/submit",(req,res)=>{
    res.send(`<h1>your brand name is</h1><h2> ${brand}</h2>`);
})
app.listen(port,()=>{
    console.log(`listening on port${port}`)
})