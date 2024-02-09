const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const lessonActivitySchema = new Schema ({
    description: String,
    content: String,
    correctAnswer: String,
    activityType: {
        type: String,
        enum: ['multiple-choice', 'fill-in-the-blank', 'true-false', 'short-answer']
    }   
})


module.exports = mongoose.model("Activity", lessonActivitySchema)