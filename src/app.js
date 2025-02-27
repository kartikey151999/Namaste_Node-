const express =  require("express");
const db = require("./config/database.js")
const server = express();
const User = require("./models/user.js")

server.post("/signup",async(req,res)=>{

const user = new User({
    firstName: "Kartikey",
    lastName: "Pande",
    mailId: "K@p.com",
    password: "kp@123",
    age: 25,
    gender: "Male",

});
try{
 await user.save();
 res.send("data send");
}catch(err){
    res.status(400).send(err.message);
}
 
});




db().then(() => {
    console.log("database connected successfully") 
    server.listen(7777,()=>{
        console.log("Server is connected and running on port 7777.....")
    })
}).catch((err) => {
    console.error(err);
});


// ---------------------------------------------------------------------------
//multiple route handler for single route 
// server.get('/user/:1',(req,res,next) =>{
//     res.send({
//         FirstName: "Mark",
//         LastName: "wood"
//     })

// },
//    (req,res) =>{
//     res.send({
//         FirstName: "Harry",
//         LastName: "potter"
//     })
//    }

// )

// server.post('/user',[(req,res,next) =>{
//             next();
//             res.send("Data Saved")
//         },
// (req,res,next) =>{
//     next(); 
//     res.send("Data Saved2")   
// }
// ],
// (req,res,next) =>{
//     next(); 
//     res.send("Data Saved1")
// })

// server.delete('/user',(req,res) =>{
//     res.send("Data Deleted")
// })

// server.use("/test",(req,res) =>{
//     res.send("Test this request");
// })

// server.use("/hello",(req,res) =>{
//     res.send("hello this request");
// })

// server.use((req,res) =>{
//     res.send("request send");
// })
