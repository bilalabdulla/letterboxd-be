const express = require('express')
const { getAllUsers, getUser, updateUser, getMessage, createMessage } = require('../controllers/users')
const router = express.Router()

router.route('/').get(getAllUsers)
router.route('/:userId').get(getUser).patch(updateUser)
router.route('/messages').get(getMessage).post(createMessage)

module.exports = router
