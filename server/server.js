require('./config/config');

const express = require('express');
const mongoose = require('mongoose');

const path = require('path');

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));


//parsear aplicacion/json
app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, '../public')))

console.log(path.resolve(__dirname, '../public'));

// configuracion global de rutas
app.use(require('./routes/index'));

mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useCreateIndex: true },
    (err, res) => {

        if (err) throw err;

        console.log('Base de datos ONLINE');

    })

app.listen(process.env.PORT, () => {
    console.log(`Escucnado puerto ${process.env.PORT}`);
});