
//1.Generate package.json
import exp from 'express'
import {connect} from 'mongoose'
//import {userApp} from "./APIs/UserAPI.js";
import { productApp } from "./APIs/productAPI.js";
import cookieParser from 'cookie-parser';
const app=exp()
app.use(exp.json())
//app.use(cookieParser())
//app.use("/user-api",userApp)
app.use("/product-api",productApp)
//start srerver 
//app.listen(4000,()=>console.log("server on port 40000.."))
//connect to db server
async function connectDB() {
try
{
    await connect("mongodb://localhost:27017/anurag");
    console.log("Db connection succesfully")
    app.listen(4000,()=>console.log("server on port 4000..."))

}
catch(err)
{
    console.log("err in DB connection :",err)
}
}
connectDB();

//error handling middleware
app.use((err,req,res,next)=>{
    console.log(err.name)
    if(err.name === "ValidationError"){
        return res.status(400).json({message:"error occured",error:err.message })
    }
    if(err.name === "CastError"){
        return res.status(400).json({message:"error occured",error:err.message })
    }
    if(err.name ==="MongooseError"){
        return res.status(400).json({message:"error occured",error:err.message })
    }
    //server side error
   res.status(500).json({message:"error occured",error:err})
})
