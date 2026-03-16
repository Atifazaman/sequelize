const {Sequelize,DataTypes}=require('sequelize')
const sequelize=require('../utils/dbConnection')

const Departments=sequelize.define('department',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

module.exports=Departments