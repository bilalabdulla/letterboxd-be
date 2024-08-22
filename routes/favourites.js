const express = require('express')
const { createFavourite, getFavourites, removeFavourite, getFavouriteMovie, getmovieFavourites } = require('../controllers/favourites')
const router = express.Router()

router.route('/create').post(createFavourite)
router.route('/user/:userId').get(getFavourites)
router.route('/remove').patch(removeFavourite)
router.route('/:userId/:movieId').get(getFavouriteMovie)
router.route('/movie/new/:movieId').get(getmovieFavourites)

module.exports = router