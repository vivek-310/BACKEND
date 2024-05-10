import express from "express";
import bodyParser from "body-parser";
const app=express();
const port=3000;

app.use(bodyParser.urlencoded({extended:true}));
app.post("/submit",(req,res)=>{
    const xuv=req.body["fname"]
    res.render("index.ejs",{
       valty:xuv
   })
})
app.get("/",(req,res)=>{
  res.render("index.ejs",{
    valty:''
  });
})

app.listen(port,()=>{
    console.log("port is listening");
})
