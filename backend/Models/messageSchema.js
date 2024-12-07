import mongoose from "mongoose";
import validator from "validator";

const messageSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required: true,
        minLength:[3,"First Name Must Contain At Least 3 Characters!"]
    },
    lastName:{
        type:String,
        required: true,
        minLength:[3,"Last Name Must Contain At Least 3 Characters!"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: {
            validator: validator.isEmail,
            message: "Please Provide A Valid Email!"
        }
    },
    phone:{
        type:String,
        required: true,
        minLength:[10,"Phone Number Must Contain Excat 10 Digit!"],
        maxLength:[10,"Phone Number Must Contain Excat 10 Digit!"]
    },
    message:{
        type:String,
        required: true,
        minLength:[10,"Message Must Contain Atleast Characters!"]
    },
})

export const Message=mongoose.model("Message",messageSchema);