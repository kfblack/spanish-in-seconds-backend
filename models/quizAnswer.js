const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const quizAnswerSchema = new Schema ({
    content: String,
    isCorrect: Boolean,
})


module.exports = mongoose.model("Quiz Answer", quizAnswerSchema)