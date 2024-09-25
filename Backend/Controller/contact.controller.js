import ContactMe from "../Models/contact.model.js";

export const Contacts=async (req,res)=>{
 try {
    const {name,email,contact,query}=req.body;
    const newContact=new ContactMe({
        name:name,
        email:email,
        contact:contact,
        query:query,
    })
    await newContact.save()
    res.status(201).json({message:"Help on it's Way",newContact:{
        _id:newContact._id,
        name:newContact.fullname,
        email:newContact.email,
        contact:newContact.contact,
        query:newContact.query,
    }})
 } catch (error) {
    console.log("Error:" + error.message)
     res.status(500).json({message:"Internal Server Error"})
 }
}

