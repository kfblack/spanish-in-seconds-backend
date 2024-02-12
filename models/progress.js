const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const progressSchema = new Schema ({
    dateComplete: Date,
    lesson: [{
        type: Schema.Types.ObjectId,
        ref: "Lesson"
    }]
})


module.exports = mongoose.model("Progress", progressSchema)