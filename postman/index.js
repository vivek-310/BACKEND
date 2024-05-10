import express from "express";
const app=express();
const port=3000;
app.get("/",(req,res)=>{
    res.send("<h1>welcome to https</h1>")
})
app.post("/hel",(req,res)=>{
    res.sendStatus(201);
})
app.put("/hello",(req,res)=>{
    res.sendStatus(200);
});
app.patch("/wel",(req,res)=>{
    res.sendStatus(200);
});
app.delete("/welcome",(req,res)=>{
    res.sendStatus(201);
})


app.listen(port,() => {
    console.log(`server started at port ${port}`);
});