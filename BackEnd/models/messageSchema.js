import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
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
    message:{
        type: String,
        required: true,
        minLength: [10, "Message Must Contain At Least 10 Character"]
    },
});

export const Message = mongoose.model("Message", messageSchema);