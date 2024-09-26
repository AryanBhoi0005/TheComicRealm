import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from './Routes/book.route.js'
import cors from 'cors'
import UserRoute from './Routes/user.route.js'
import FeedbackRoute from './Routes/feedback.route.js'
import ContactUsRoute from './Routes/contact.route.js'

const app = express()
dotenv.config();
const PORT=process.env.PORT || 4001;

//Prevent CORS Error
app.use(cors());
app.use(express.json())
//Port Connection
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT }`)
})

//To connect MongoDB
const MongoDB=process.env.MongoURL ;
try {
   mongoose.connect(MongoDB,{});
   console.log("Mongo DB connected");
} catch (error) {
  console.log("Error",error);
  process.exit(1); 
}

// Test route
app.get('/test', (req, res) => {
    
  res.json({
    message: "Bhai gf dila do !!"
  });
   
});

//Defining Routes to hit the DB
app.use("/book",bookRoute);
app.use("/users",UserRoute);
app.use("/feedback",FeedbackRoute)
app.use("/contactUs",ContactUsRoute);

