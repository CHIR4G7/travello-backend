const mongoose = require('mongoose');

const PinSchema = new mongoose.Schema({
    username : {
        type: String,
        required: true,
        min: 3
    },
    title: {
        type: String,
        required: true
    },
    description :{
        type: String,
        required: true,
        min: 10,
        max: 30
    },
    rating : {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    latitude :{
        type: Number,
        required: true
    },
    longitude :{
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Pin',PinSchema);