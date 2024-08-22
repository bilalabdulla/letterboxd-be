const User = require('../models/User')
const PortMessage = require('../models/PortMessage')

const getAllUsers = async (req, res) => {
    const users = await User.find({}).sort('-createdAt')
    // const { user: { userId }} = req 
    res.status(200).json({ users})
}

const getUser = async (req, res) => {
    const { userId } = req.params 
    const user = await User.findById({
        _id: userId 
    })
    if (!user) {
      res.status(404).json('not found')   
    }
    res.status(200).json({ user })
}

const updateUser = async (req, res) => {
    const { userId } = req.params
    const user = await User.findByIdAndUpdate({
        _id: userId 
    }, req.body, {new: true, runValidators: true })

    if(!user) {
        res.status(404).json('user does not exist')
    }

    res.status(201).json({ user })
}

const getMessage = async (req, res) => {
    const message = await PortMessage.find({})

    if (!message) {
        res.status(404).json('no messages exist')
    }

    res.status(200).json({ message })
}

const createMessage = async ( req, res) => {
    const message = await PortMessage.create(req.body)
    res.status(200).json({ message })
}

module.exports = {
    getAllUsers,
    getUser,
    updateUser,
    getMessage,
    createMessage
}