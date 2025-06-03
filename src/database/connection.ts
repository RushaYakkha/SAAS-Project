import { log } from 'console'
import {Sequelize} from 'sequelize'//yaha {Sequelize} chai class hoo
//class ko instiation tah dinu paryo ni so!
const sequelize = new Sequelize({
    database : process.env.DB_NAME, //database ko name
    username : process.env.DB_USERNAME,//mysql ko username ->default root
    password : process.env.DB_PASSWORD,
    host : process.env.DB_HOST,//location of database
    dialect :"mysql",//k database use garna lageko(mysql,maria,sqlite)
    port : Number(process.env.DB_PORT)//default port no for mysql

}) 

sequelize.authenticate()
.then(()=>{
    console.log("Authenticated,connected");
    
})
.catch((error)=>{
    console.log(error)
    
})
export default sequelize