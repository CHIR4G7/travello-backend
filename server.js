const express = require('express')
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();
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

app.listen(3245,()=>{
    console.log("backend connected");
})

