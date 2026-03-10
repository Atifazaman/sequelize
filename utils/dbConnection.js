const mysql=require('mysql2')
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('students', 'root', 'aaaa', {
  host: 'localhost',
  dialect: 'mysql'
});

(async ()=>{
  try{
  await sequelize.authenticate()
  console.log("Connected to the database")
  }catch{
console.log(error);

  }
})()

module.exports=sequelize
























// const connection=mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"aaaa",
//     database:"students"
// })

// const studentTableQuery=`create table if not exists students(id int auto_increment primary key,name varchar(25),email varchar(30),age int)`

// connection.execute(studentTableQuery,(err)=>{
// if(err){
//     console.log(err.message)
// }
// console.log("Table has been created")
// })

// module.exports=connection