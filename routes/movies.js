const express = require('express')
const { createMovie, getMovie, getDBMovies } = require('../controllers/movies')
const router = express.Router()

router.route('/').get(getDBMovies)
router.route('/create').post(createMovie)
router.route('/:imdbID').get(getMovie)

module.exports = router