import express from "express";
const app=express();
const port=3000;

// const d = new Date();
// let day = d.getDay();

// let type:"weekday";
// let msg:"it's time to workhard";
//Date("December 03, 2023 01:15:00");

app.get("/",(req,res)=>{
    const d = new Date();
    let day = d.getDay();

    let type="weekday";
    let msg="it's time to workhard";
    console.log(day);
    if(day===0||day===6){
        type="weekend" ,
        msg ="its time to enjoy"
    }
    res.render("index.ejs",{
       daytype:type ,
       advice:msg
    });
})
app.listen(port,()=>{
    console.log("port is listening");
})


