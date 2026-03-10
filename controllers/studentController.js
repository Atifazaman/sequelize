const db=require('../utils/dbConnection')

const getEntries=(req,res)=>{
const getQuery=`select * from students`
db.execute(getQuery,(err,result)=>{
if(err){
    console.log(err.message)
    res.status(500).send(err.message)
    db.end()
    return
}
if(result.length===0){
    res.status(404).send("No Students Stored in database")
}
res.status(200).send(result)
})
}


const getEntryById=(req,res)=>{
    const {id}=req.params
const getByIdQuery=`select * from students where id=?`
db.execute(getByIdQuery,[id],(err,result)=>{
if(err){
    console.log(err.message)
    res.status(500).send(err.message)
    db.end()
    return
}
if(result.length===0){
    res.status(404).send("Student Not Found")
}
res.status(200).send(result)
})
}

const addEntries=(req,res)=>{
    const {name,email,age}=req.body
const addStudentQuery=`insert into students(name,email,age)values(?,?,?)`
db.execute(addStudentQuery,[name,email,age],(err)=>{
if(err){
    console.log(err.message)
    res.status(500).send(err.message)
    db.end()
    return
}
res.status(200).send("Student stored successfully")
})
}

const updateEntry=(req,res)=>{
   const {name,email}=req.body
   const {id}=req.params
const updateStudentQuery=`update students set name=?,email=? where id=?`
db.execute(updateStudentQuery,[name,email,id],(err,result)=>{
if(err){
    console.log(err.message)
    res.status(500).send(err.message)
    db.end()
    return
}
if(result.affectedRows===0){
    res.status(404).send("Student Not Found")
    return
}
res.status(200).send("Student updated successfully")
})
}

const deleteEntry=(req,res)=>{
 const {id}=req.params
const deleteStudentQuery=`delete from students where id=?`
db.execute(deleteStudentQuery,[id],(err,result)=>{
if(err){
    console.log(err.message)
    res.status(500).send(err.message)
    db.end()
    return
}
if(result.affectedRows===0){
    res.status(404).send("Student Not Found")
    return
}
res.status(200).send("Student deleted successfully")
})
}

module.exports={
    getEntries,
    getEntryById,
    addEntries,
    updateEntry,
    deleteEntry
}