const Favourite = require('../models/Favourite')

const createFavourite = async (req, res) => {
    const { movieId, userId } = req.body
    
    let favourite = await Favourite.findOne({
        createdBy: userId
    })

    if (!favourite) {
        favourite = await Favourite.create({
            createdBy: userId
        })
        res.status(202).json('created favourite')
    }
    favourite.movies.push(movieId)
    await Promise.all([favourite.save()])

    res.status(200).json({ favourite })
}

const getFavourites = async (req, res) => {
    const { userId } = req.params 
    const favourite = await Favourite.find({
        createdBy: userId
    }).populate('movies').populate('createdBy').exec()
    if (!favourite) {
        res.status(404).json('favourites doesnt exist')
    }
    res.status(200).json({ favourite })
}

const getFavouriteMovie = async (req, res) => {
    const { userId, movieId } = req.params 

    // const favouriteUser = await Favourite.findOne({
    //     createdBy: userId
    // })

    // if (!favouriteUser) {
    //     res.status(405).json('user not found')
    // }

    const favourite = await Favourite.findOne({
        createdBy: userId,
        movies: movieId
    })

    if (!favourite) {
        res.status(404).json('favourite movie does not exist')
    } else {
        res.status(200).json({ favourite })
    }
}

const removeFavourite = async (req, res) => {
    const { userId, movieId } = req.body 

    const favourite  = await Favourite.updateMany({
        createdBy: userId 
    }, {$pull: {movies: movieId}})

    res.status(201).json({ favourite })
}

const getmovieFavourites = async (req, res) => {
    const { movieId } = req.params 
    const movieFavourites = await Favourite.find({
        movies: movieId 
    })

    if (!movieFavourites) {
        res.status(404).json('movie not found')
    }

    res.status(200).json({length: movieFavourites.length, movie: movieFavourites})
}

module.exports = {
    createFavourite,
    getFavourites,
    getFavouriteMovie,
    removeFavourite,
    getmovieFavourites
}