import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from './routes/auth.js'
import usersRoute from './routes/users.js'
import roomsRoute from './routes/rooms.js'
import hotelsRoute from './routes/hotels.js'
import cookieParser from "cookie-parser"
dotenv.config("")
const app = express();

const connect=async()=>
{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to Mongoose")
      } catch (error) {
        throw error;
      }
};

mongoose.connection.on("disconnected",()=>{
    console.log("Disconnected to Mongoose")
})
//middlewares 
app.use(cookieParser())
app.use(express.json())
app.use("/api/auth",authRoute)
app.use("/api/users",usersRoute)
app.use("/api/hotels",hotelsRoute)
app.use("/api/rooms",roomsRoute)


app.use((err,req,res,next)=>{
   const errorStatus=err.status  ||500
   const errorMessage=err.message ||"Something went wrong!"
   return res.status(errorStatus).json({
        success:false,
        status:err.status,
        message:err.message,
        stack:err.stack ,
   })
})
app.listen(8800,()=>{
    connect()
    console.log("Connected to backend")}
    ); 