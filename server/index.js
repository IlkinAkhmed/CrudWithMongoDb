
const express = require('express')
const cors = require('cors')
const mongoose = require("mongoose")


const { Schema } = mongoose

const productsSchema = new Schema(
    {
        image: { type: String, required: true },
        title: { type: String, required: true },
        price: { type: Number, required: true },
        color: { type: String, required: true },
        type: { type: String, required: true },
    }, { timestamps: true }
);
const app = express()

app.use(express.json())
app.use(cors())


const Products = mongoose.model('Products', productsSchema)


// get all data
app.get('/products', async (req, res) => {
    try {
        const data = await Products.find({})
        res.send(data)
    } catch (error) {
        res.status(500).json({ message: 'Server connection error!!!' })
    }
})


// get product by id
app.get('/products/:id', async (req, res) => {
    try {
        const { id } = req.params
        const product = await Products.findByIdAndDelete(id)
        if (product) {
            res.send(product)
        } else {
            res.status(404).json({ message: "not found!!!" })
        }
    } catch (error) {
        res.status(500).json({ message: 'Server connection error!!!' })
    }
})




// add product
app.post('/products', (req, res) => {
    try {
        const newProduct = new Products({
            ...req.body
        })
        newProduct.save()
        res.status(200).json({ message: "product created!" })
    } catch (error) {
        res.status(500).json({ message: 'Server connection error!!!' })

    }
})

// delete product
app.delete('/products/:id', async (req, res) => {
    try {
        const { id } = req.params
        await Products.findByIdAndDelete(id)
        res.status(200).json({ message: "product deleted" })
    } catch (error) {
        res.status(500).json({ message: 'Server connection error!!!' })

    }
})


// update product
app.put('/products/:id', async (req, res) => {
    const { id } = req.params
    try {
        await Products.findByIdAndUpdate(id, req.body)
        res.status(200).json({ message: "product updated" })
    } catch (error) {
        res.status(500).json({ message: 'Server connection error!!!' })
    }
})





mongoose.connect('mongodb+srv://IlkinAkhmed:ilkin123@cluster0.ghwwmer.mongodb.net/').catch(err => console.log("db not connect" + err))

app.get('/', (req, res) => {
    res.send(`<h1>Home Page</h1>`)
})



app.listen(3000, () => {
    console.log('server 5000 portunda isleyir');
})
