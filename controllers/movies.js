const Movie = require('../models/Movie')

const createMovie = async (req, res) => {
    const {Title, Year, Poster, Actors, imdbID} = req.body 
    const movie = await Movie.findOne({
        imdbID: imdbID 
    })
    if (movie) {
        res.status(500).json('unauthorized')
    } else {
        const newMovie = await Movie.create({...req.body})
         res.status(200).json({ newMovie })
    }
}

const getMovie = async (req, res) => {
    const { imdbID } = req.params 
    const movie = await Movie.findOne({
        imdbID: imdbID
    })
    if (!movie) {
        res.status(404).json('not found')
    }
    res.status(200).json({ movie })
}

const getDBMovies = async (req, res) => {
    const movies = await Movie.find({}).sort('-createdAt')

    res.status(200).json({ movies })
}

module.exports = { 
    createMovie,
    getMovie,
    getDBMovies
}