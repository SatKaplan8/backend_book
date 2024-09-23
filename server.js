const express = require('express');
const { errorHandler } = require('./middlewares/errorHandler.js');
const connectDb = require('./config/dbConnection.js');
const dotenv = require('dotenv').config();
const cors = require('cors')
connectDb()

const app = express();

const port = process.env.PORT || 5001;
app.use(express.json(), cors())
app.use('/api/books', require('./routes/bookRoutes.js'))
app.use(errorHandler)
app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})