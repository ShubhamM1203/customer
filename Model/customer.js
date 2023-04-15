const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    Id: {
        type: Number,
        required: true,
    },
    Name: {
        type: String,
        required: true,
    },
    ContactNumber: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
    }
})

module.exports = mongoose.model('customerData', customerSchema)