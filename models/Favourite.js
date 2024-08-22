const mongoose = require('mongoose')

const FavouriteSchema = new mongoose.Schema({
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true,
        ref: 'LetterUsers'
    },
    movies: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MovieTests',
        default: []
    }]
}, {timestamps: true })

module.exports = mongoose.model('Favourite', FavouriteSchema)