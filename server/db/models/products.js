const { Schema, model } = require('mongoose')

let productsSchema = new Schema({
    name: String,
    company: String,
    category: String,
    price: Number,
    image: String
})

module.exports = model('product', productsSchema)