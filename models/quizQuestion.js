const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const quizQuestionSchema = new Schema ({
    content: String,
    questionType: String,
    answers: [{
        type: Schema.Types.ObjectId,
        ref: 'Quiz Answer'
    }]
})


module.exports = mongoose.model("Quiz Question", quizQuestionSchema)