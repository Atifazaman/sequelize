const express=require('express')
const app=express()
const studentRoute=require('./routes/studentRoute')
const db=require('./utils/dbConnection')
const studentModel=require("./models/students")

app.use(express.json())
app.use("/students",studentRoute)

db.sync({force:false}).then(()=>{
app.listen(3000,()=>{
    console.log("Server is Running")
})
}).catch((err)=>{
console.log(err)
})
