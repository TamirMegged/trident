const Order = require('../db/models/orders')
const Product = require('../db/models/products')
const moment = require('moment')
const mongoose = require('mongoose')

const createReceipt = async (orderID) => {
    const order = await Order.findById(orderID).populate({
        path: 'items.product',
        model: Product
    })
    const { _id, city, street, order_date, shipping_date, creditCard, items, total_price } = order
    let data = '';
    data += `Order Details:
    Order #: ${_id}
    Order Date: ${moment(order_date).format("DD/MM/YYYY")}\n\n`;
    data += `Shipping Details:
    City: ${city}
    Street: ${street}
    Shipping Date: ${moment(shipping_date).format("DD/MM/YYYY")}\n\n`;
    data += `Items:
    `
    items.map(item => {
        data += `#${item.product._id}     ${item.product.name} - ${item.product.company}     X${item.amount}     ${item.amount * item.product.price}$
        `
        // data += `
        // Product #: ${item.product._id}
        // Name: ${item.product.name}
        // Company: ${item.product.company}
        // Price: ${item.amount * item.product.price}
        // Amount: ${item.amount}\n\n`
    })
    data += `\nPayment Details:
    Card Number: ****-****-****-${creditCard}
    Total Price: ${total_price}$\n`
    return data;
}

module.exports = createReceipt