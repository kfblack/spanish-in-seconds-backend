const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const activityAnswerSchema = new Schema ({
    content: String,
    isCorrect: Boolean,
})


module.exports = mongoose.model("Activity Answer", activityAnswerSchema)