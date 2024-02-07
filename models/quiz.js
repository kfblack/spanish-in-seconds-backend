const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const quizSchema = new Schema ({
    title: String,
    description: String,
    lesson: [{
        type: Schema.Types.ObjectId,
        ref: "Lesson"
    }],
    questions: [{
        type: Schema.Types.ObjectId,
        ref: 'Quiz Question'
    }]
})


module.exports = mongoose.model("Quiz", quizSchema)