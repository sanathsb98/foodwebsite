const express = require('express')
const cors = require('cors')
const app = express()

const localhost = {
    host :'https://localhost:8081'   //to avoid cross orgin resource sharing
}



//middlewares:

app.use(cors(localhost))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//routers
const router = require('./Routes/productRouter')    //routers
app.use('/api/products',router)

//test api:

app.get('/',(req,res)=>{
    res.json({message:'hello from api'})
})

const Port = 8080;
const PORT = process.env.Port || Port     //for production level

try {

    app.listen(PORT,()=>{
        console.log(`listening on port ${Port}`)
    })
    
    
} catch (error) {
    console.log(`error in listening at local host ${Port}`)   //local host 8080
}
