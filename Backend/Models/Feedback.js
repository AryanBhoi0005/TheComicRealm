import mongoose from "mongoose";

const FeedbackSchema= new mongoose.Schema({
    query:{
        type:String,
        required:true,
    }
})
const FeedbackQuery=new mongoose.model("FeedbackQuery",FeedbackSchema)
export default FeedbackQuery;
