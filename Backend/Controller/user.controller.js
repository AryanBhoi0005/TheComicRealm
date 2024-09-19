import User from "../Models/user.model.js";
//DB named User will be formed like books

export const signup= async (req,res)=>{
    try {
//Importing credentials from body
        const {fullname,email,password}=req.body;
//email is unique to check for if user alreay exist
        const user=await User.findOne({email})
        if(user){
            return res.status(400).json({message:"User already exists"})
        }
        const createdUser= new User({
            fullname,
            email,
            password
        })
 //Created Data is saved in the DB
        await createdUser.save()
        res.status(201).json({message:"User created Successfully"})
    } catch (error) {
        console.log("Error:" + error.message)
        res.status(500).json({message:"Internal Server Error"})
    }
}