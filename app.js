require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()

const moviesRouter = require('./routes/movies')

const cors = require('cors')
const connectDB = require('./db/connect')

app.use(express.json())
app.use(cors())

app.use('/api/v1/movies', moviesRouter)

app.get('/', (req, res) => {
    res.send('hello')
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
