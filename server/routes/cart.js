const router = require('express').Router()
const User = require('../db/models/users')
const Product = require('../db/models/products')
const mongoose = require('mongoose')
const emptyCart = require('../services/cart.service')
const { verifyCustomer } = require('../verify')

// Empty cart (remove all items) - DELETE /empty/:id - <customer>
router.delete('/empty/:id', verifyCustomer, async (req, res) => {
    try {
        await emptyCart(req.params.id)
        res.status(200).json({ error: false, msg: "Cart is empty" })
    } catch (err) {
        res.sendStatus(500)
    }
})

// Remove item from cart - DELETE /items/:userID/:itemID - <customer>
router.delete('/items/:userID/:itemID', verifyCustomer, async (req, res) => {
    try {
        let user = await User.findById(req.params.userID).populate({
            path: 'cart.products.product',
            model: Product,
            select: { price: 1 },
        })
        let item = user.cart.products.find(({ _id }) => _id == req.params.itemID)
        let priceToSub = item.product.price * item.amount
        user.cart.products = user.cart.products.filter(({ _id }) => _id != req.params.itemID)
        user.cart.total_price -= priceToSub
        user.cart.date = new Date()
        await user.save()
        res.status(200).json({ error: false, msg: "Item removed successfully" })
    } catch (err) {
        res.sendStatus(500)
    }
})

// Edit cart item - PUT /items/edit - <customer>
router.put('/items/edit', verifyCustomer, async (req, res) => {
    console.log(req.body)
    const { itemID, userID, amount } = req.body
    if (itemID && userID && amount) {
        try {
            let user = await User.findById(userID).populate({
                path: 'cart.products.product',
                model: Product,
                select: { price: 1 },
            })
            let item = user.cart.products.find(({ _id }) => _id == itemID)
            let priceChange = item.product.price * (amount - item.amount)
            user.cart.total_price += priceChange
            item.amount = amount
            user.cart.date = new Date()
            await user.save()
            res.status(201).json({ error: false, msg: "Changes saved" })
        } catch (err) {
            res.sendStatus(500)
        }
    } else {
        res.status(400).json({ error: true, msg: "Missing some information" })
    }
})

// Add item to cart - POST /items/add - <customer>
router.post('/items/add', verifyCustomer, async (req, res) => {
    const { product, amount, user } = req.body;
    if (user && product && amount) {
        const { _id: userID } = user
        const { _id: productID } = product
        try {
            let user = await User.findById(userID)
            let isAlreadyAdded = user.cart.products.find(({ product }) => product == productID)
            if (isAlreadyAdded) {
                isAlreadyAdded.amount += amount
            } else {
                user.cart.products.push({ product: productID, amount: amount })
            }
            if (user.cart.total_price) {
                user.cart.total_price += (amount * product.price);
            } else {
                user.cart.total_price = (amount * product.price);
            }
            user.cart.date = new Date()
            const result = await user.save()
            res.json(result)
        } catch (err) {
            res.status(400).json({ error: true, msg: "Failed adding product to cart" });
        }
    } else {
        res.status(400).json({ error: true, msg: "Missing something, please choose both user and product" })
    }
})


// Get all items in user's cart - <customer>
router.get('/:userID', verifyCustomer, async (req, res) => {
    try {
        const r = await User.findById(req.params.userID).populate({
            path: 'cart.products.product',
            model: Product,
        })
        const result = r.cart ? r.cart : r
        res.json(result)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

module.exports = router