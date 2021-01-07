const User = require('../db/models/users')
const mongoose = require('mongoose')

const emptyCart = async (userID) => {
    let user = await User.findById(userID)
    user.cart.products = []
    user.cart.total_price = 0
    user.cart.date = null
    await user.save()
}

module.exports = emptyCart