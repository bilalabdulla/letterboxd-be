const mongoose = require('mongoose')

const PortMessageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please provide your name']
    },
    email: {
        type: String,
        required: [true, 'please provide your email'],
        match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'please provide valid email'],
    },
    phone: {
        type: Number
    },
    message: {
        type: String
    }
}, {timestamps: true })

module.exports = mongoose.model('PortMessage', PortMessageSchema)