const UserFavourites = require('../models/UserFavourites')

const createuserFavourites = async (req, res) => {
    const { userId } = req.params
    const user = await UserFavourites.findOne({
        createdBy: userId
    })
    if (!user) {
    const userFavourites = await UserFavourites.create(req.body)
        res.status(200).json({ userFavourites })
    } else {
        const userFavourites = await UserFavourites.findOneAndUpdate({
            createdBy: userId
        }, req.body, {new: true, runValidators: true})
        res.status(201).json({ userFavourites })
    }
    }

const getUserFavourites = async (req, res) => {
    const { userId } = req.params
    const userFavourites = await UserFavourites.find({
        createdBy: userId 
    }).populate('movieOne').populate('movieTwo').populate('movieThree').populate('movieFour').exec()

    if (!userFavourites) {
        res.status(404).json('User Favourites not found')
    }
    res.status(200).json({ userFavourites })
}

const updateUserFavourites = async (req, res) => {
    const { userId } = req.params
    const userFavourites = await UserFavourites.findOneAndUpdate({
        createdBy: userId 
    }, req.body, { new: true, runValidators: true })

    res.status(201).json({ userFavourites })
}

module.exports = {
    createuserFavourites,
    getUserFavourites
}