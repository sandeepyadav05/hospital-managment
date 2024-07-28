 import app from"./app1.js";
 import cloudinary from "cloudinary";

 cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret_key: process.env.LOUDINARY_API_SECRET,
 });

app.listen(process.env.PORT, ()=>{
    console.log(`Server listening on port ${process.env.PORT}`);

});