const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const quizAnswerSchema = new Schema ({
    content: String,
    isCorrect: Boolean,
    questions: [{
        type: Schema.Types.ObjectId,
        ref: 'Quiz Question'
    }]
})


module.exports = mongoose.model("Quiz Answer", quizAnswerSchema)