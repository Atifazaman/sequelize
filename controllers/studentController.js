const Student=require('../models/students')
const Department = require("../models/department")



const getEntries=async(req,res)=>{
try{
const student=await Student.findAll()
res.status(200).json(student)
}catch(err){
    res.status(500).send("Unable to retrieve students details")
}
}



const getEntryById=async(req,res)=>{
   
try{
 const {id}=req.params
 const student=await Student.findByPk(id)
 if(!student){
     res.status(404).send("Student Not Found")
 }
 res.status(200).json(student)
}catch(err){
     res.status(500).send("Unable to retrieve student details")
}
}



const addEntries=async (req,res)=>{
try{
    const {name,email,age}=req.body
    const student=await Student.create({
        name:name,
        email:email,
        age:age
    })
res.status(201).send("Student stored successfully")
}
catch(err){
    console.log(err)
res.status(500).send("unable to make an entry")
}
}


const updateEntry=async(req,res)=>{ 
  try{
    const {name,email,age}=req.body
 const {id}=req.params
 const student=await Student.findByPk(id)

 if(!student){
     res.status(404).send("Student Not Found")
 }

 student.name = name
 student.email=email
student.age = age

await student.save()

 res.status(200).json(student)
}catch(err){
     res.status(500).send("Unable to update student details")
}
}



const deleteEntry=async(req,res)=>{
 try{
 const {id}=req.params
 const student=await Student.destroy({
    where:{
        id:id
    }
 })
 
 if(!student){
    return res.status(404).send("Student Not Found")
 }

 res.status(200).send("Student has been deleted")
}catch(err){
     res.status(500).send("Unable to delete student details")
}
}

const createStudentWithDepartment=async(req,res)=>{
    try{
const student=await Student.create(req.body)
 res.status(201).json(student)
    } catch (err) {

        res.status(500).json({ message: "Error creating student" })

    }

}


const getDepartmentWithStudents = async (req,res)=>{
try{

const {id} = req.params

const department = await Department.findByPk(id,{
 include: Student
})

if(!department){
return res.status(404).send("Department Not Found")
}

res.status(200).json(department)

}catch(err){

res.status(500).json({message:"Unable to retrieve department"})

}
}

module.exports={
    getEntries,
    getEntryById,
    addEntries,
    updateEntry,
    deleteEntry,
    createStudentWithDepartment,
    getDepartmentWithStudents
}
