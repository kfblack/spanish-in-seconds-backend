const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const progressSchema = new Schema ({
    dateComplete: Date,
    lessonScore: Number,
    user: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],
    lesson: [{
        type: Schema.Types.ObjectId,
        ref: "Lesson"
    }]
})


module.exports = mongoose.model("Progress", progressSchema)