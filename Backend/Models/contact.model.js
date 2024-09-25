import mongoose from "mongoose";

const ContactSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    contact:{
        type:Number,
        required:true,
    },
    query:{
        type:String,
        required:true,
    }
})
const ContactMe=new mongoose.model("ContactMe",ContactSchema);
export default ContactMe;
