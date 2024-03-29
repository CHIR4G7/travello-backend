const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userName : {
        type: String,
        required: true,
        min: 3,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 6
    }
})

module.exports = mongoose.model("User",UserSchema);