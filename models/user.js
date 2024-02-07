const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema ({
    name: String,
    email: String,
    passwordDigest: String,
    avatar: String,
    timestamps: true,
    lessons: [{
        type: Schema.Types.ObjectId,
        ref: 'Lesson'
    }],
    progress: [{
        type: Schema.Types.ObjectId,
        ref: 'Progress'
    }]
})


module.exports = mongoose.model("User", userSchema)