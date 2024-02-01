const express = require("express");
const Router = express.Router();

const User = require("../models/User");

const bcrypt = require("bcrypt");

//register route
Router.post("/register", async (request, response) => {
  try {
    //encrpyt the password
    const salt = await bcrypt.genSalt(10);
    const hashedpass = await bcrypt.hash(request.body.password, salt);

    //generate the user
    const newuser = new User({
      userName: request.body.userName,
      email: request.body.email,
      password: hashedpass,
    });

    //save in db and send response
    const user = await newuser.save();
    response.status(200).json(user.userName);
  } catch (err) {
    response.status(500).json(err);
  }
});

//login route
Router.post("/login", async (request, response) => {
  try {
    //find user
    const user = await User.findOne({ userName: request.body.userName });
    if(!user)
    {
        return response.status(400).json("Invalid username");
    }

    //validate password
    const validpass = await bcrypt.compare(request.body.password,user.password);
    if(!validpass)
    {
        return response.status(400).json("Incorrect Password")
    }
    else
    {
        response.status(200).json(user);
    }
    //if ok send ok rspsonse
  } catch (err) {
    return response.send(500).json(err);
  }
});

module.exports = Router;
