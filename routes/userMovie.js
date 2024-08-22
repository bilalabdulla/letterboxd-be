const express = require('express')
const { createUserMovie, getUserMovie, updateUserMovie, getAllUserMovies, getSingleUserMovies, getMovie } = require('../controllers/userMovies')
const router = express.Router()

router.route('/create').post(createUserMovie).patch(updateUserMovie)
router.route('/length/total/:userId/:movieId').get(getUserMovie)
router.route('/').get(getAllUserMovies)
router.route('/:userId').get(getSingleUserMovies)
router.route('/movie/new/:movieId').get(getMovie)

module.exports = router