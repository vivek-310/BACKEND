import  express  from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname=dirname(fileURLToPath(import.meta.url));

const app=express();
const port=3000;

app.use(bodyParser.urlencoded({extended:true}));

app.get("/" , (req,res) => {
    //console.log(__dirname+"/public/index.html")
    res.sendFile( __dirname+"/public/index.html");
})
app.post("/submit",(req,res)=>{
    console.log(req.body);
})
app.listen(port,()=>{
    console.log(`server started at port ${port}`);
    
});