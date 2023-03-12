import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();
const connectToDb= async ()=>{
   try {
      const connectionParams={
        useNewUrlParser:true,
        useUnifiedTopology:true,
      }
       mongoose.connect(process.env.DB,connectionParams)
       console.log("connected to databse");
    } catch (error) {
       console.log(error.message);
       console.log("could not connect to the database ");
   }
} 
export default connectToDb;