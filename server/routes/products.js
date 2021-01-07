const router = require("express").Router()
const Product = require('../db/models/products')
const mongoose = require('mongoose')
const { verifyAdmin, verifyUser } = require("../verify")

// Get all products - GET / - <customer | admin>
router.get('/', verifyUser, async (req, res) => {
    try {
        const result = await Product.find({}, { __v: 0 })
        res.json(result)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

// Count all products - GET /count
router.get('/count', async (req, res) => {
    try {
        Product.countDocuments({}, function (err, count) {
            res.json(count)
        });
    } catch (err) {
        console.log(err)
    }
})

// Get products by category - GET /:category - <customer | admin>
router.get('/:category', verifyUser, async (req, res) => {
    try {
        const result = await Product.find({ category: req.params.category }, { __v: 0 })
        res.json(result)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

// Add new product - POST / - <admin>
router.post('/add', verifyAdmin, async (req, res) => {
    const { name, company, category, price, image } = req.body
    if (name && company && category && price && image) {
        try {
            const newProduct = new Product({ name, company, category, price, image })
            await newProduct.save()
            res.status(201).json({ "error": false, "msg": "New Product Uploaded" })
        }
        catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    } else {
        res.status(400).json({ "error": true, "msg": "Missing info, please fill all fields" })
    }
})

// Edit product - PUT / - <admin>
router.put('/edit', verifyAdmin, async (req, res) => {
    const { id, name, company, category, price, image } = req.body
    if (id && name && company && category && price && image) {
        try {
            let product = await Product.findById(id)
            product.name = name
            product.company = company
            product.category = category
            product.price = price
            product.image = image
            await product.save()
            res.status(201).json({ error: false, msg: "Changes saved" })
        } catch (err) {
            res.sendStatus(500)
        }
    } else {
        res.status(400).json({ error: true, msg: "Missing some information" })
    }
})

// Search in products - /search/:text - <customer | admin>
router.get('/search/:text', verifyUser, async (req, res) => {
    try {
        const result = await Product.find({
            $or: [{
                name: {
                    $regex: req.params.text, $options: "i"
                }
            },
            {
                company: {
                    $regex: req.params.text, $options: "i"
                }
            }]
        })
        res.json(result)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

module.exports = router