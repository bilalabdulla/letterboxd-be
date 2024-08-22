const mongoose = require('mongoose')

const UserFavouritesSchema = new mongoose.Schema({
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true 
    }, 
    movieOne: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MovieTests'
    },
    movieTwo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MovieTests'
    },
    movieThree: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MovieTests'
    },
    movieFour: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MovieTests'
    }
}, {timestamps: true})

module.exports = mongoose.model('UserFavourites', UserFavouritesSchema)