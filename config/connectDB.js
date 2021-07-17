  
const mongoose = require("mongoose")
const config = require('config')

const connectDB = ()=>{
    mongoose.connect(config.get("MONG_OURI") ,{ useNewUrlParser: true , useUnifiedTopology: true})
    .then(()=> console.log("server database mongoose connected"))
    .catch('error connection to database')
}

module.exports= connectDB