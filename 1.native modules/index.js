console.log("hello");

const fs = require('fs');


fs.writeFile("message.txt","welcome webdev",(err)=>{
    if(err) throw err;
    console.log("the file has be saved");
});

fs.readFile("message.txt",'utf-8',(err,data)=>{
    if(err) throw err;
    console.log(data);
})