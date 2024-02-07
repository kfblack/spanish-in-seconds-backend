const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const lessonSchema = new Schema ({
    title: String,
    content: String,
    description: String,
    level: Number,
    activities: [{
        type: Schema.Types.ObjectId, 
        ref: 'Activity'
    }],
    quiz: [{
        type: Schema.Types.ObjectId,
        ref: 'Quiz'
    }]
})


module.exports = mongoose.model("Lesson", lessonSchema)