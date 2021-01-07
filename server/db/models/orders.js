const { Schema, model } = require('mongoose')

const ordersSchema = new Schema({
    customer: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    items: [
        {
            product: {
                type: Schema.Types.ObjectId,
                ref: 'products'
            },
            amount: Number
        }
    ],
    total_price: Number,
    city: String,
    street: String,
    order_date: Date,
    shipping_date: Date,
    creditCard: String
})

module.exports = model('order', ordersSchema)