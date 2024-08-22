const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({
    imdbID: {
        type: String,
        required: [true, 'id should be provided'], 
        unique: true,
    },
    Title: {
        type: String,
        required: true,
        unique: true,
    },
    Year: {
        type: String,
        required: true
    },
    Actors: {
        type: String,
        required: true
    },
    Poster: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('MovieTests', MovieSchema)