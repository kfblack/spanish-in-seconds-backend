const logger = require('morgan');
const cors = require('cors');
require('dotenv').config()

require('./config/db.connection.js');

const AuthRouter = require('./routes/AuthRouter')
const lessonRouter = require('./routes/lessons')
const quizzesRouter = require('./routes/quizzes')
const activitiesRouter = require('./routes/activities')
const activityAnswerRouter = require('./routes/activityAnswer')
const quizQuestionRouter = require('./routes/quizQuestion');
const quizAnswerRouter = require('./routes/quizAnswer');

const { PORT } = process.env;

const express = require('express');

const app = express();


app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}))

app.use('/auth', AuthRouter);
app.use('/lessons', lessonRouter)
app.use('/quizzes', quizzesRouter)
app.use('/activities', activitiesRouter);
app.use('/activityAnswer', activityAnswerRouter);
app.use('/quizQuestion', quizQuestionRouter);
app.use('/quizAnswer', quizAnswerRouter);

app.get('/', (req, res) => {
    res.send('hello world');
});

app.listen(PORT, () => console.log(`listening on ${PORT}`))