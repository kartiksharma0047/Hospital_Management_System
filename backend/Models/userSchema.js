import mongoose from "mongoose";
import validator from "validator";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

const userSchema = new mongoose.Schema({
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
  password:{
    type:String,
    required:true,
    minLength: [8, "Password Contains Atleast 8 Characters"],
    select:false    // We get all the data during Fetching or Uploading but not this key which is password
  },
  role:{
    type:String,
    requried:true,
    enum:["Admin","Patient","Doctor"]    // In future Doctor can be added
  },
  doctorDepartment:{
    type:String
  },
  docAvatar:{
    public_id:String,
    url:String
  },
});

// Some Methods are created

// (1) Password is hashed after getting from user at an instant like before userSchema is saving that is why pre save what is happeining :- Security Improved
userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        next();
    }
    this.password= await bcrypt.hash(this.password,10);
})

// (2) When Password is used by user via login then it will get encrypted by comparing the hash values
userSchema.methods.comparePassword=async function (enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)   
}

// (3) Token generation is also important, after user login then its activity time should be limited and user need to re-login again after a period of login in the site.
userSchema.methods.generateJsonWebToken=function(){
    return jwt.sign({id: this._id},process.env.JWT_SECRET_KEY, {
        expiresIn:process.env.JWT_EXPIRES,
    })
}

export const User = mongoose.model("User", userSchema);