require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()

const cors = require('cors')
const connectDB = require('./db/connect')

const moviesRouter = require('./routes/movies')
const authRouter = require('./routes/auth')
const watchlistRouter = require('./routes/watchlist')
const favouriteRouter = require('./routes/favourites')
const userMovieRouter = require('./routes/userMovie')
const userRouter = require('./routes/users')
const userFavouritesRouter = require('./routes/userFavourites')

const authenticateUser = require('./middlewares/authentication')

app.use(express.json())
app.use(cors())

app.use('/api/v1/movies', authenticateUser, moviesRouter)
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/watchlist', authenticateUser, watchlistRouter)
app.use('/api/v1/favourite', authenticateUser, favouriteRouter)
app.use('/api/v1/usermovie', authenticateUser, userMovieRouter)
app.use('/api/v1/users', userRouter)
app.use('/api/v1/userfavourites', authenticateUser, userFavouritesRouter)

app.get('/', (req, res) => {
    res.status(200).json({message: 'good job'})
})


const port = process.env.PORT || 8000 

const start = async () => {
    try {
            await connectDB(process.env.MONGO_URI)
            app.listen(port, () => {
            console.log(`server is listening on ${port}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start()
