const express=require('express')
const { contactModel } = require('../model/contact.model')

const contactRouter=express.Router()


// adding the contact-------------
contactRouter.post('/add',async(req,res)=>{
    try{
        const new_contact=new contactModel(req.body)
        await new_contact.save()
        res.status(200).send({"msg":"contact added","contact":new_contact})
    }catch(err){
        res.status(400).send({"msg":err.message})
    }
})

// getting all the contacts
contactRouter.get('/',async(req,res)=>{
    try{
        const contacts=await contactModel.find()
        res.status(200).send(contacts)
    }catch(err){
        res.status(400).send({"msg":err.message})
    }
})

// get single data
contactRouter.get('/:id',async(req,res)=>{
    const id=req.params.id
    try{
        const contacts=await contactModel.find({_id:id})
        res.status(200).send(contacts)
    }catch(err){
        res.status(400).send({"msg":err.message})
    }
})
// delete the contact
contactRouter.delete("/delete/:id",async(req,res)=>{
    const id=req.params.id
    try{
        await contactModel.findByIdAndDelete({_id:id})
        res.status(200).send({"msg":"deleted successfully"})
    }catch(err){
        res.status(400).send({"msg":err.message})
    }
})

// edit the contact
contactRouter.patch('/edit/:id',async(req,res)=>{
    const id=req.params.id
    try{
        await contactModel.findByIdAndUpdate({_id:id},req.body)
        res.status(200).send({"msg":"Updated successfully"})
    }catch(err){
        res.status(400).send({"msg":err.message})
    }
})

module.exports={contactRouter}