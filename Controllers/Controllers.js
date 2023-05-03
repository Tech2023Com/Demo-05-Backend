
const UserSchema =  require('../Schemas/UserSchema')



exports.addData = (req,res) =>{

    console.log(req.query)

UserSchema.insertMany({  name : req.query.name ,  email : req.query.email }).then((result)=>{
    console.log(result)
    if(result.length >  0)
    {
        res.send("User created sucessfully")
    }
    else
    {
        res.send("Something went Wrong")

    }
}).catch((err)=>{
    console.log(err)
    res.send("Something went Wrong")

})  

   
}


exports.getData = (req,res) =>{

    UserSchema.find({}).then((result)=>{
        res.send(result)
    }).catch((err)=>{
        res.send(err)
    })

}