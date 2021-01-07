const { Schema, model } = require('mongoose')

const usersSchema = new Schema({
    first_name: String,
    last_name: String,
    email: String,
    id_number: String,
    password: String,
    city: String,
    street: String,
    role: String,
    cart: {
        date: Date,
        products: [
            {
                product: {
                    type: Schema.Types.ObjectId,
                    ref: 'products'
                },
                amount: Number
            }
        ],
        total_price: Number
    }
})

module.exports = model('user', usersSchema)

