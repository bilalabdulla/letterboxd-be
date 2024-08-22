const mongoose = require('mongoose')

const WatchSchema = new mongoose.Schema({
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'LetterUsers',
        required: true,
        unique: true 
    },
    movies: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MovieTests',
        default: []
    }]
}, {timestamps: true })

module.exports = mongoose.model('Watchlist', WatchSchema)