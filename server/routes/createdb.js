const router = require("express").Router()
const Order = require('../db/models/orders')
const User = require('../db/models/users')
const Product = require('../db/models/products')
const mongoose = require('mongoose')
const users = require('../db/data/users')
const products = require('../db/data/products')
const orders = require('../db/data/orders')

router.post('/', async (req, res) => {
    try {
        await User.insertMany(users)
        await Product.insertMany(products)
        await Order.insertMany(orders)
        res.status(201).json({ error: false, msg: "Database data filled successfully" })
    } catch (err) {
        res.sendStatus(500)
    }
})

router.delete('/', async (req, res) => {
    try {
        await User.deleteMany()
        await Product.deleteMany()
        await Order.deleteMany()
        res.status(201).json({ error: false, msg: "Database data cleared successfully" })
    } catch (err) {
        res.sendStatus(500)
    }
})

module.exports = router