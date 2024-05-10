import express from "express";
const app=express();
const port=3000;

app.listen(port,()=>{
    console.log(`the port is running on ${port}`);
});

app.get("/hello",(req,res)=>{
    // res.send("hello world welcome to expresss")
    res.send("<h1>hello its hello endpoint</h1>")
});
app.get("/",(req,res)=>{
    // res.send("hello world welcome to expresss")
    res.send("<h1>hello</h1>")
});