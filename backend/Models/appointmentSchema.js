import mongoose from "mongoose";
import validator from "validator";

const appointmentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "First Name Must Contain At Least 3 Characters!"],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "Last Name Must Contain At Least 3 Characters!"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    validate: {
      validator: validator.isEmail,
      message: "Please Provide A Valid Email!",
    },
  },
  phone: {
    type: String,
    required: true,
    minLength: [10, "Phone Number Must Contain Excat 10 Digit!"],
    maxLength: [10, "Phone Number Must Contain Excat 10 Digit!"],
  },
  dob:{
    type:Date,
    required:[true,"DOB is requried!"]
  },
  gender:{
    type:String,
    required:true,
    enum:["Male","Female"]
  },
  appointment_date:{
    type:String,
    required:true
  },
  department:{
    type:String,
    requried:true
  },
  doctor:{
    firstName:{
        type:String,
        requried:true
    },
    lastName:{
        type:String,
        requried:true
    }
  },
  hasVistited:{
    type:Boolean,
    default:false
  },
  doctorId:{
    type:mongoose.Schema.ObjectId,
    required:true
  },
  patientId:{
    type:mongoose.Schema.ObjectId,
    required:true
  },
  address:{
    type:String,
    required:true
  },
  status:{
    type:String,
    enum:["Pending","Accepted","Rejected"],
    default:"Pending"
  }
});

export const Appointment=mongoose.model("Appointment",appointmentSchema);