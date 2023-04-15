const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    release_year: {
        type: Date,
        required: true,
    },
    description: {
        type: String
    }
})

module.exports = mongoose.model('movieData', movieSchema)