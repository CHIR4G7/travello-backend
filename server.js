const express = require('express')
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT
dotenv.config();
app.use(cors())
app.use(express.json());

//connect database
mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true}).then(()=>{
    console.log("connected db");
}).catch((err)=>{
    console.log(err);
})

//ROUTES

app.use('/api/pin',require('./routes/pin'));
app.use('/api/users',require('./routes/users'));

app.get("/", (req, res) => {
    res.send("Express on Vercel");
  });

app.listen(PORT,()=>{
    console.log("backend connected");
})

module.exports = app;
