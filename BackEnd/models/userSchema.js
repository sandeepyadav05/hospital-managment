import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        minLength: [3, "First Name Must Contain At Least 3 Character"]
    },
    lastName:{
        type: String,
        required: true,
        minLength: [3, "First Name Must Contain At Least 3 Character"]
    },
    email:{
        type: String,
        required: true,
        validator: [validator.isEmail, "Please Provide a Valid Email"]
    },
   phone:{
        type: String,
        required: true,
        minLength: [11, "Phone Number Must Contain Exact 11 Dgits"],
        maxLength: [11, "Phone Number Must Contain Exact 11 Digits"]
    },
    nic:{
        type: String,
        required: true,
        minLength: [13, "NIC Must Contain Exact 13 Dgits"],
        maxLength: [13, "NIC Must Contain Exact 13 Digits"]
    },
    dob:{
        type: Date,
        required:[true," DOB is required"]
    },
    gender: {
        type: String,
        required: true,
        enum: ["Male", "Female"],
    },
    password: {
        type: String,
        minLength: [11, "Password must contain at least 8 characters"],
        required: true,
        select: false
    },
    role:{
        type: String,
        required:true,
        enum: ["Admin", "Patient", "Doctor"],
    },
    doctorDepartment:{
        
        type:String,

    },
    docAvatar:{
        public_id: String,
        url: String,
    },
});

userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        next()
    }
    this.password = await bcrypt.hash(this.password,10);
});

userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.generateJsonwebToken = function(){
  return jwt.sign({id: this._id},process.env.JWT_SECRET-KeyboardEvent,{
    expiresIn: process.env.JWT_EXPIRES,
  });
}






export const User = mongoose.model("user", userSchema);