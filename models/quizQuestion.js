const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const quizQuestionSchema = new Schema ({
    content: String,
    correctAnswer: String,
    possibleAnswers: [String]
})


module.exports = mongoose.model("Quiz Question", quizQuestionSchema)