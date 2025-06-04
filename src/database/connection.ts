import { log } from 'console'
import "reflect-metadata";

import {Sequelize} from 'sequelize-typescript'//yaha {Sequelize} chai class hoo
//class ko instiation tah dinu paryo ni so!
const sequelize = new Sequelize({
    database : process.env.DB_NAME, //database ko name
    username : process.env.DB_USERNAME,//mysql ko username ->default root
    password : process.env.DB_PASSWORD,
    host : process.env.DB_HOST,//location of database
    dialect :"mysql",//k database use garna lageko(mysql,maria,sqlite)
    port : Number(process.env.DB_PORT),//default port no for mysql
    models : [__dirname + '/models']//current location + models

}) 

sequelize.authenticate()
.then(()=>{
    console.log("Authenticated,connected");
    
})
.catch((error)=>{
    console.log(error)
    
})


//migrate garne ani push garnu parcha
sequelize.sync({force : false})
.then(()=>{
    console.log("Migrated successfully new change ");
    
})

export default sequelize