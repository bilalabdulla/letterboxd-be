const UserMovie = require('../models/UserMovies')

const getUserMovie = async (req, res) => {
    const { userId, movieId } = req.params

    const userMovie = await UserMovie.find({
        createdBy: userId,
        movieId: movieId
    })

    if (!userMovie) {
        res.status(404).json('movie does not exist')
    }

    res.status(200).json({ userMovie })
}

const getMovie = async (req, res) => {
    const { movieId } = req.params 
    const movie = await UserMovie.find({
        movieId: movieId
    }).populate('createdBy')

    if (!movie) {
        res.status(404).json('movie not found')
    }

    res.status(200).json({length: movie.length, movie: movie})
}

const getAllUserMovies = async (req, res) => {
    const userMovie = await UserMovie.find({}).populate('createdBy').populate('movieId').limit(9).sort('-updatedAt').exec()
    res.status(200).json({ userMovie })
}

const getSingleUserMovies = async (req, res) => {
    const { userId } = req.params 
    const userMovies = await UserMovie.find({
        createdBy: userId
    }).populate('createdBy').populate('movieId').sort('-createdAt').exec()
    res.status(200).json({ userMovies })
}

const createUserMovie = async (req, res) => {
    const { userId, id , rating } = req.body
    req.body.createdBy = req.body.userId 
    req.body.movieId = req.body.id
    
    let userMovie = await UserMovie.findOne({
        createdBy: userId,
        movieId: req.body.id
    })

    if (!userMovie) {
        const newUserMovie = await UserMovie.create(req.body)
        res.status(201).json({newUserMovie})
    } else {
        const newUserMovie = await UserMovie.findOneAndUpdate({
            createdBy: req.body.userId,
            movieId: req.body.id 
        }, req.body, { new: true, runValidators: true} )
        res.status(200).json({ newUserMovie })
    } 
}

const updateUserMovie = async (req, res) => {

    const userMovie = await UserMovie.findOneAndUpdate({
        createdBy: req.body.userId,
        movieId: req.body.id 
    }, req.body, { new: true, runValidators: true })

    if (!userMovie) {
        res.status(404).json('movie not found')
    }
    res.status(200).json({ userMovie })
}



module.exports = {
    getUserMovie,
    createUserMovie,
    updateUserMovie,
    getAllUserMovies,
    getSingleUserMovies,
    getMovie
}