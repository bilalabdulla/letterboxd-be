const express = require('express')
const { createWatchlist, getWatchlist, removeWatchlist, getWatchlistMovie, getMovieWatchlist } = require('../controllers/watchlist')
const router = express.Router()

router.route('/create').post(createWatchlist)
router.route('/user/:userId').get(getWatchlist)
router.route('/remove').patch(removeWatchlist)
router.route('/:userId/:movieId').get(getWatchlistMovie)
router.route('/length/total/:movieId').get(getMovieWatchlist)

module.exports = router
