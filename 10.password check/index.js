import express from "express";
//import bodyParser from "body-parser";
const app=express();
const port=3000;


var useraut=false;


app.use(express.urlencoded({extended:true}));

function passwordcheck(req,res,next){
    let password=req.body["pass"];
    console.log(password);
    if(password==="vivek"){

        useraut=true;
    }
    next();
}
app.use(passwordcheck);


app.get("/",(req,res)=>{
    res.sendFile("C:/Users/Lenovo/backend/10.password check/public/index.html")
})


app.post("/check",(req,res)=>{
    if(useraut){
        res.sendFile("C:/Users/Lenovo/backend/10.password check/public/secret.html");
    }
    else{
        res.redirect("/")
    }
})


app.listen(port,()=>{
    console.log("port is listening");
})