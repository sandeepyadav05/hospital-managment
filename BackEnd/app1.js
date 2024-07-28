import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import User from "./model1.js";


const app = express();


app.use(cors())
app.use(express.urlencoded({ extended: false, limit: "16kb" }));

const port = 4000;

const mong = await mongoose.connect(process.env.MONGO_URI).then(console.log("databases connected")).catch((error)=>console.log(error));



app.get("/user", async function(req,res){
    const registeredUser = await User.find({})
    return res.send(registeredUser);
    })

app.post('/register',async function(req,res){
  //const { roll_no, name } = req.body;

  if(!user || !roll_no) {
    return res.status(400);
  }
  const users = await User.create({
    roll_no: req.body.roll_no,
    name: req.body.name
  })

  return res.send("User Created").status(200);
  
})



app.listen(port,()=>console.log(`server runs at port ${port}`));

