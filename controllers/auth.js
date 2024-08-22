const User = require('../models/User')
const jwt = require('jsonwebtoken')

const register = async (req, res) => {
    const user = await User.create({...req.body})
    const token = user.createJWT()
    console.log(res.data);
    res.status(200).json({ user, token })
}

const login = async (req, res) => {
    const { email, password } = req.body 

    if (!email || !password ) {
        res.status(404).json('notfound')
    }
    const user = await User.findOne({ email })
    if(!user) {
        res.status(404).json(' invalid credentials')
    }
    const isPasswordCorrect = await user.comparePassword(password)
    if (!isPasswordCorrect) {
        res.status(401).json('incorrect password')
    }

    const token = user.createJWT()
    console.log(token);
    res.status(200).json({ user, token })
    
}

module.exports = { register, login }