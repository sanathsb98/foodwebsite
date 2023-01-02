const dbConfig = require('../Config/dbConfig')  //getting db config
const {Sequelize, DataTypes} = require('sequelize')

const sequelize = new Sequelize(
        dbConfig.DB,
        dbConfig.USER,
        dbConfig.PASSWORD,
        {
           
            host:dbConfig.HOST,
            dialect:dbConfig.dialect,
            operatorsAliases: false,

            pool:{
                max: dbConfig.pool.max,
                min: dbConfig.pool.min,
                acquire: dbConfig.pool.acquire,
                idle: dbConfig.pool.idle,

            }

        }
);

sequelize.authenticate()
.then(()=>{
    console.log('connected to mysql database')
}).catch((error)=>{
    console.log('unable to connect to database :)')
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.products = require('./productModel')(sequelize,DataTypes)
db.reviews = require('./reviewModel')(sequelize,DataTypes)

db.sequelize.sync({force: false})           ///if true we will lose the data 

.then(()=>{
    console.log('resync done')
})

module.exports = db   
           //exporting our database
