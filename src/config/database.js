const mongoose = require("mongoose");

const db = async () =>{
    await mongoose.connect("mongodb+srv://ankurpande:123Mongodb@cluster1.pimpp.mongodb.net/devtinder")
}



// 123Mongodb
module.exports = db;