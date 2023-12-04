const mongoose=require('mongoose')
require('dotenv').config()

// const contactSchema=mongoose.Schema({
//     name:String,
//     email:String,
//     phone:String,
//     label:String,
//     booked_slots:Array
// },{
//     vesrionKey:false
// })

const connection=mongoose.connect(process.env.contactURL)

module.exports={connection}