const express=require('express')
const studentRoute=express.Router()
const studentController=require('../controllers/studentController')


studentRoute.get("/",studentController.getEntries)
studentRoute.get("/:id",studentController.getEntryById)
studentRoute.post("/",studentController.addEntries)
studentRoute.put("/:id",studentController.updateEntry)
studentRoute.delete("/:id",studentController.deleteEntry)
studentRoute.post("/addingWithDepartment",studentController.createStudentWithDepartment)
studentRoute.get("getWithDepartment",studentController.getDepartmentWithStudents)

module.exports=studentRoute
