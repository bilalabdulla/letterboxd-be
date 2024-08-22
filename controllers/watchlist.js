const Watch = require('../models/Watchlist')

const createWatchlist = async (req, res) => {  
    const { movieId, userId } = req.body
    
    let watchlist = await Watch.findOne({
        createdBy: userId
    })

    if (!watchlist) {
        watchlist = await Watch.create({
            createdBy: userId
        })
    }
    watchlist.movies.push(movieId)
    await Promise.all([watchlist.save()])

    res.status(200).json({ watchlist })
}

const getWatchlist = async (req, res) => {
    const { userId } = req.params 

    const watch = await Watch.find({
        createdBy: userId
    }).populate('movies').populate('createdBy').exec()
    res.status(200).json({ watch })
}

const getWatchlistMovie = async (req, res) => {
    const { userId, movieId } = req.params 

    const watchlist = await Watch.findOne({
        createdBy: userId,
        movies: movieId
    })

    if (!watchlist) {
        res.status(404).json('movie not found')
    } else {
        res.status(200).json({ watchlist })
    }
}

const getMovieWatchlist = async (req, res) => {
    const { movieId } = req.params 

    const watchlist = await Watch.find({
        movies: movieId
    })
    if (!watchlist) {
        res.status(404).json('watchlist not found')
    } 
    res.status(200).json({ length: watchlist.length, watchlist })
}

const removeWatchlist = async (req, res) => {
    const { userId, movieId } = req.body 
    const watchlist  = await Watch.updateMany({
        createdBy: userId 
    }, {$pull: {movies: movieId}})

    res.status(201).json({ watchlist })
}


module.exports = {
    createWatchlist,
    getWatchlist,
    removeWatchlist,
    getWatchlistMovie,
    getMovieWatchlist
}