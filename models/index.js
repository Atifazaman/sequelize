const students=require('./students')
const department=require('./department')


department.hasMany(students)
students.belongsTo(department)



module.exports = {
 students,
 department
}