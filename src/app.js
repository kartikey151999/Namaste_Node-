const express =  require("express");
const server = express();

server.listen(7777,()=>{
    console.log("test")
})

server.use("/test",(req,res) =>{
    res.send("Test this request");
})

server.use("/hello",(req,res) =>{
    res.send("hello this request");
})

server.use((req,res) =>{
    res.send("request send");
})
