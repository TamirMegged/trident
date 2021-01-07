const { text } = require('express')
const { Schema, model } = require('mongoose')
// const CategoryEnum = require('./enums/category.enum')

let productsSchema = new Schema({
    name: String,
    company: String,
    // category: CategoryEnum,
    category: String,
    price: Number,
    image: String
})

module.exports = model('product', productsSchema)