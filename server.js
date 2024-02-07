const logger = require('morgan');
const cors = require('cors');
require('dotenv').config()

require('./config/db.connection.js');

const AuthRouter = require('./routes/AuthRouter')

const lessonRouter = require('./routes/lessons')

const { PORT } = process.env;

const express = require('express');

const app = express();


app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}))

app.use('/auth', AuthRouter);
app.use('/lessons', lessonRouter)

app.get('/', (req, res) => {
    res.send('hello world');
});

app.listen(PORT, () => console.log(`listening on ${PORT}`))