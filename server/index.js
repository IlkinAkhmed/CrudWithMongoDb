const express = require('express')
const cors = require('cors')
const mongoose = require("mongoose")
const router = require('./src/Routes/ProductRoutes')

const app = express()
app.use(express.json())
app.use(cors())
app.use('/products',router)



mongoose.connect('mongodb+srv://IlkinAkhmed:ilkin123@cluster0.ghwwmer.mongodb.net/').catch(err => console.log("db not connect" + err))

app.listen(3000, () => {
    console.log('server 5000 portunda isleyir');
})
