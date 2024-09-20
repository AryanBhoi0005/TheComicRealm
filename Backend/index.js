import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from './Routes/book.route.js'
import cors from 'cors'
import UserRoute from './Routes/user.route.js'

const app = express()
dotenv.config();
const PORT=process.env.PORT || 4000;

//Prevent CORS Error
app.use(cors());
app.use(express.json())
//Port Connection
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT }`)
})

//To connect MongoDB
const MongoDB=process.env.MongoURL;
try {
   mongoose.connect(MongoDB,{});
   console.log("Mongo DB connected");
} catch (error) {
  console.log("Error",error);
}

//Defining Routes to hit the DB
app.use("/book",bookRoute);
app.use("/users",UserRoute);

