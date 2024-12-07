import mongoose from "mongoose";

export const dbConnection=()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"Hospital_Management_System_MERN"
    }).then(()=>{
        console.log("Connected to database!")
    }).catch((err)=>{
        console.log(`Error occured in database connection: ${err}`)
    });
}