const router = require("express").Router()
const Order = require('../db/models/orders')
const User = require('../db/models/users')
const Product = require('../db/models/products')
const mongoose = require('mongoose')
const emptyCart = require('../services/cart.service')
const createReceipt = require('../services/order.service')
const { verifyCustomer } = require("../verify")
var fs = require('fs');

// Count all orders - GET /count
router.get('/count', async (req, res) => {
    try {
        await Order.countDocuments({}, function (err, count) {
            res.json(count)
        });
    } catch (err) {
        res.sendStatus(500)
    }
})

// Get all user's orders - GET /user/:id - <customer>
router.get('/user/:id', verifyCustomer, async (req, res) => {
    try {
        const orders = await Order.find({ customer: req.params.id })
        res.json(orders)
    } catch (err) {
        res.sendStatus(500)
    }
})

// Get all orders' dates - GET /dates - <customer>
router.get('/dates', async (req, res) => {
    try {
        const orders = await Order.find({}, { __v: 0 })
        const shippingDates = orders.map((order) => order.shipping_date)
        res.json(shippingDates)
    } catch (err) {
        res.sendStatus(500)
    }
})

// New order - POST / - <customer>
router.post('/', verifyCustomer, async (req, res) => {
    try {
        const { user, city, street, date, creditCard } = req.body
        if (user && city && street && date && creditCard) {
            const customer = await User.findById(user._id)
            const hashCreditCard = creditCard.slice(-4)
            let newOrder = new Order({ customer: customer._id, city, street, order_date: new Date(), shipping_date: date, creditCard: hashCreditCard, items: customer.cart.products, total_price: customer.cart.total_price })
            let order = await newOrder.save()
            await emptyCart(customer)
            res.status(201).json({ error: false, msg: "New order recieved", orderID: order._id })
        } else {
            res.status(400).json({ error: true, msg: "Missing some info, please fill all fields" })
        }
    } catch (err) {
        res.sendStatus(500)
    }
})

// Create a receipt - /receipt - <customer>
router.post('/receipt', verifyCustomer, async (req, res) => {
    try {
        const { orderID } = req.body
        const receipt = await createReceipt(orderID)
        res.json({ error: false, msg: "Receipt created successfully", receipt })
    } catch (err) {
        console.log(err)
    }
})

module.exports = router