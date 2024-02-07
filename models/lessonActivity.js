const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const lessonActivitySchema = new Schema ({
    questionType: String,
    content: String,
    lesson: [{
        type: Schema.Types.ObjectId,
        ref: 'Lesson'
    }],
    activityAnswer: [{
        type: Schema.Types.ObjectId,
        ref: 'Activity Answer'
    }]
})


module.exports = mongoose.model("Activity", lessonActivitySchema)