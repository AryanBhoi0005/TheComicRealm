import User from "../Models/user.model.js";
//DB named User will be formed like books
import bcryptjs from 'bcrypt'

export const signup= async (req,res)=>{
    try {
//Importing credentials from body
        const {fullname,email,password}=req.body;
//email is unique to check for if user alreay exist
        const user=await User.findOne({email})
        if(user){
            return res.status(400).json({message:"User already exists"})
        }
        //Hashing password just before sending it into DB 
        const hashPassword =await bcryptjs.hash(password,10)  
       
        const createdUser= new User({
            fullname:fullname,
            email:email,
            password:hashPassword, //Hashed Password is now passed
            // password:password,
        })
 //Created Data is saved in the DB
        await createdUser.save()
        res.status(201).json({message:"User created Successfully",user:{
            _id:createdUser._id,
            fullname:createdUser.fullname,
            email:createdUser.email,
        }})
    } catch (error) {
        console.log("Error:" + error.message)
        res.status(500).json({message:"Internal Server Error"})
    }
}

export const login =async(req,res) =>{
    try {
        const {email,password} =req.body;
        const user=await User.findOne({email});   //This basically is DB itself 
        //We will compare between logged in password and user.password which is DB stored password
        const isMatch=await bcryptjs.compare(password,user.password)
        if(!user || !isMatch){
            return res.status(400).json({message:"Invalid username or password"})
        }else{
            return res.status(200).json({message:"Login successful",user:{
                _id:user._id,
                fullname: user.fullname,
                email: user.email
            }})
        }
    } catch (error) {
        console.log("Error" + error.message)
        res.status(500).json({message:"Internal server error"})
    }
}