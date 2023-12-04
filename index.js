const express=require('express')
const { connection } = require('./db')
const cors=require("cors")
const { contactRouter } = require('./router/contact.router')

const app=express()


app.use(cors())

app.use(express.json())

app.use('/contacts',contactRouter)

app.get('/',(req,res)=>{
    res.status(200).send({"msg":"Well come to the contact app"})
})

app.listen(4500,async()=>{
    try{
        await connection
        console.log("connected to server")
        console.log("running on 4500")
    }catch(err){
        console.log(err)
    }
})