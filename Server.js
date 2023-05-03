const express = require('express')
const app = express()
const PORT = 8990
const db =  require('./DB/Db')
const MyRoutes = require('./Routes/Routes')



app.use((req , res , next )=> {
	res.setHeader('Access-Control-Allow-Origin' ,'*');
	res.setHeader('Access-Control-Allow-Methods' ,'GET , POST , PUT , PATCH , DELETE');
	res.setHeader('Access-Control-Allow-Headers' ,'Content-Type, X-Requested-With , Accept , Origin, authorization'  );
	res.setHeader('Access-Control-Expose-Headers' , 'authorization');
	next();
});


app.use('/' , MyRoutes)




app.listen(PORT , ()=>{
    console.log(`Server is Running on PORT : ${PORT}`)

})




