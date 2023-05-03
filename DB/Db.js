const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost:27017/db05' , {
    useNewUrlParser : true
})


const db = mongoose.connection;


db.on("error" , function(){
    console.log("Connection Error")
})
db.once("open" , function(){
    console.log(`Successfully connected with mongo DB`)
})


module.exports =  db



