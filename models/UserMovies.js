const mongoose = require('mongoose')

const UserMoviesSchema = new mongoose.Schema({
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'LetterUsers'
    },
    movieId: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'MovieTests',
    },
    imdbID: {
        type: String
        },
    favourite: {
        type: Boolean,
        default: false 
    },
    watchlist: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        enum: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5],
        default: 0,
    },
    review: {
        type: String,
        default: ''
    }
}, {timestamps: true })

module.exports = mongoose.model('LetterUserMovies', UserMoviesSchema)