import mongoose from "mongoose"

//We'll be defining schema for card data as we keep that data in DB
const bookSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    id:{
        type:Number,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
})
const Book = new mongoose.model("Book", bookSchema)
export default Book;