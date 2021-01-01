// mongo atlas
// hbiaser132
// vGDu3V0sTIfxBsDu
// mongodb+srv://hbiaser132:vGDu3V0sTIfxBsDu@cluster0.cfl2q.mongodb.net/test

require('./config/config');

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(require('./routes/usuario'));

mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useCreateIndex: true },
    (err, res) => {

        if (err) throw err;

        console.log('Base de datos ONLINE');

    })

app.listen(process.env.PORT, () => {
    console.log(`Escucnado puerto ${process.env.PORT}`);
});