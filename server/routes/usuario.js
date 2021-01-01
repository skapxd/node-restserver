const express = require('express');

const bcrypt = require('bcrypt');
const _ = require('underscore');

const app = express();

const Usuario = require('../models/usuario');
const { forEach } = require('underscore');


app.get('/usuario', (req, res) => {


    let desde = parseInt(req.query.desde) || 0;

    desde = Number(desde);

    let limite = Number(req.query.limite) || 5;

    Usuario.find({ estado: true }, )
        .skip(desde)
        .limit(limite)
        .exec((err, usuarios) => {


            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                })
            }

            Usuario.count({ estado: true }, (err, conteo) => {

                res.json({
                    conteo,
                    ok: true,
                    usuarios
                });
            })


        });

});


app.post('/usuario', (req, res) => {

    let body = req.body;

    let usuario = new Usuario({
        nombre: body.nombre,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10),
        roll: body.roll
    });

    usuario.save((err, usuarioDB) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }


        res.json({
            ok: true,
            usuarioDB
        })
    });

    // if (body.nombre === undefined) {
    //     res.status(400).json({
    //             ok: false,
    //             mensaje: 'El nombre es necesario'
    //         }

    //     );
    // }

    // res.json({
    //     body
    // });
});


app.put('/usuario/:id', (req, res) => {

    let id = req.params.id;
    let body = _.pick(req.body, ['nombre', 'email', 'img', 'role', ]);

    // delete body.password;
    // delete body.google;

    Usuario.findByIdAndUpdate(id, body, { new: true, runValidators: true }, (err, usuarioDB) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }

        res.json({
            id,
            ok: true,
            usuarioDB
        });
    })
});



app.delete('/usuario/:id', (req, res) => {

    let id = req.params.id;

    Usuario.findByIdAndUpdate(id, { estado: false }, { new: true, runValidators: true }, (err, usuarioDB) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }

        res.json({
            id,
            ok: true,
            usuarioDB
        });
    })

});

module.exports = app;