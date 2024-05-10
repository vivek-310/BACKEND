import express from "express";
const app=express();
const port=3000;
// app.get("/",(req,res)=>{
//     res.send("hello world");
// });

app.listen(port,() =>{
    console.log("it is runnig on port no 3000");
})
//check whether it is listening by netstat -ano | findstr "LISTENING"
app.get("/",(req,res)=>{
    res.send("hello world")
})