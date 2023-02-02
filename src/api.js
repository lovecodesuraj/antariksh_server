import express from "express";
import mongoose from "mongoose";
import { Schema } from "mongoose";
import bodyParser from "body-parser";
import cors from 'cors'
import serverless from "serverless-http";
const Router=express.Router();
import connectToDb from "../db.js"; 
import postRoutes from '../routes/astrons.js' 

// import multer from "multer";
// const upload = multer({dest:"uploads/"});





const app=express();
app.use('/.netlify/functions/api',Router);




app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({ limit:"30mb",extended: true }));
app.use(cors());

connectToDb();

app.use('/astrons',postRoutes);
// app.use("/file",upload);
// app.post("./addPost",upload.single('photo'),(req,res,next)=>{
//      res.send("posted");
// })

module.exports=app;
module.exports.handler-serverless(app);

 

// refresh token :  1//04u07Y-YrPNLBCgYIARAAGAQSNwF-L9Irp6VNIBbnfIaSsBf1kwzPiLJnvZqwFHWGk4TJQqyDW1N8o90CXNEiDgrimqM8UBqQmH0
