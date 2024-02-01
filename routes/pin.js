const express = require('express');
const Router = express.Router();

const Pin = require('../models/Pin');



//create a pin
Router.post('/create',async (request,response)=>{
    const newpin = new Pin(request.body);
    try{
        const savedpin = await newpin.save();
        response.status(200).json(savedpin);
    }catch(err){
        response.status(500).json(err);
    }
})

//get all pins
Router.get('/getallpins',async (request,response)=>{
    try{
        const pins = await Pin.find();
        response.status(200).json(pins);
    }catch(err){
        response.status(500).json(err);
    }
})

module.exports = Router;