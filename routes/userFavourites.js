const express = require('express')
const { getUserFavourites, createuserFavourites } = require('../controllers/userFavourites')
const router = express.Router()

router.route('/:userId').get(getUserFavourites).post(createuserFavourites)

module.exports = router