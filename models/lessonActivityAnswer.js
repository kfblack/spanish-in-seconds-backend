const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const activityAnswerSchema = new Schema ({
    content: String,
    isCorrect: Boolean,
    activity: [{
        type: Schema.Types.ObjectId,
        ref: 'Activity'
    }]
})


module.exports = mongoose.model("Activity Answer", activityAnswerSchema)