import express from "express";
//import bodyParser from "body-parser";
//import morgan from "morgan";
const app=express();
const port=3000;

//app.use(morgan("tiny"));
function logger(req,res,next){
    console.log("reqmethod:",req.method);
    console.log("url:",req.url)
    next();

}
app.use(logger);
app.use((req,res,next)=>{
    console.log("request method",req.method);
    console.log("request url",req.url);
    next()
})


app.get("/",(req,res)=>{
    res.send("hello world");
})
// app.get("/submit",(req,res)=>{
//     res.send("hello world");
// })
app.listen(port,()=>{
    console.log(`listening on port${port}`);
})
