const { Products } = require("../Models/ProductModel")



// get all data
exports.getAllProducts = async (req, res) => {
    try {
        const data = await Products.find({})
        res.send(data)
    } catch (error) {
        res.status(500).json({ message: 'Server connection error!!!' })
    }
}


// get product by id
exports.getProductById = async (req, res) => {
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
}




// add product
exports.postProduct =  (req, res) => {
    try {
        const newProduct = new Products({
            ...req.body
        })
        newProduct.save()
        res.status(200).json({ message: "product created!" })
    } catch (error) {
        res.status(500).json({ message: 'Server connection error!!!' })

    }
}

// delete product
exports.deleteProduct =  async (req, res) => {
    try {
        const { id } = req.params
        await Products.findByIdAndDelete(id)
        res.status(200).json({ message: "product deleted" })
    } catch (error) {
        res.status(500).json({ message: 'Server connection error!!!' })

    }
}


// update product
exports.updateProduct =  async (req, res) => {
    const { id } = req.params
    try {
        await Products.findByIdAndUpdate(id, req.body)
        res.status(200).json({ message: "product updated" })
    } catch (error) {
        res.status(500).json({ message: 'Server connection error!!!' })
    }
}
