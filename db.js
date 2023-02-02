import mongoose from "mongoose";

const connectToDb= async ()=>{
   try {
      const connectionParams={
        useNewUrlParser:true,
        useUnifiedTopology:true,
      }
       mongoose.connect('mongodb+srv://suraj:3MrsAH9HPeYqq6By@cluster0.sop60is.mongodb.net/?retryWrites=true&w=majority',connectionParams)
       console.log("connected to databse");
    } catch (error) {
       console.log(error.message);
       console.log("could not connect to the database ");
   }
} 
export default connectToDb;