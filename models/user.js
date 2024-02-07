const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema ({
    name: String,
    email: String,
    passwordDigest: String,
    avatar: String,
    lessons: [{
        type: Schema.Types.ObjectId,
        ref: 'Lesson'
    }],
    progress: [{
        type: Schema.Types.ObjectId,
        ref: 'Progress'
    }],
}, {timestamps: true})


module.exports = mongoose.model("User", userSchema)