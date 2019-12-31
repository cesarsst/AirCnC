const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://cesarsst:878795@cluster0-jl0x6.mongodb.net/Aircnc?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}, ()=>{
    console.log("Conectado ao banco de dados!");
});

app.use(cors());
app.use(express.json());
app.use("/files", express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(routes);

app.listen(3000, () =>{
    console.log("Servidor Online!");
})