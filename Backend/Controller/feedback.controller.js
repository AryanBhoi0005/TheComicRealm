import FeedbackQuery from "../Models/Feedback.js";

export const Feedback=async(req,res)=>{
    try {
        const {query}=req.body;
        console.log(query);
        const newFeedback=new FeedbackQuery({
            query,
        })
        await newFeedback.save()
         res.status(201).json({message:"Help on it's Way",user:{
            _id:newFeedback._id,
            query:newFeedback.query,
        }})
    } catch (error) {
        console.log("Error:" + error.message)
        res.status(500).json({
            message:"Internal Server Error"
        })
    }
}