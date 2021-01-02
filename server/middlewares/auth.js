const jtw = require('jsonwebtoken');

// ========================
// Verificar token 
// ========================

let verificarToken = (req, res, next) => {

    let token = req.get('token');

    jtw.verify(token, process.env.SEED, (err, decoded) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err
            })
        }

        req.usuario = decoded.usuario;

        next();
    })

    // res.json({
    //     token
    // })
}


// ========================
// Verificar admin role 
// ========================

let verificarAdmin = (req, res, next) => {

    let usuario = req.usuario;

    if (usuario.roll === 'ADMIN_ROLE') {
        next();
        return
    } else {
        return res.status(401).json({
            ok: false,
            err: {
                message: 'El usuario no es administrador'
            }
        })
    }
}

module.exports = {
    verificarToken,
    verificarAdmin
}