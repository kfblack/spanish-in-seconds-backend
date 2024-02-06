const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema ({
    name: String,
    email: String,
    passwordDigest: String,
    avatar: String,
})


module.exports = mongoose.model("User", userSchema)