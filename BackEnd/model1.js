import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    roll_no: Number,
    name: String,
    


    
});

const User = mongoose.model('Student', studentSchema);

export default User;