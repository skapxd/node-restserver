// ================================
//  Puerto
// ================================
process.env.PORT = process.env.PORT || 3000;

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

let urlDB;

// ================================
// Base de datos
// ================================
if (process.env.NODE_ENV === 'dev') {

    urlDB = 'mongodb://localhost:27017/cafe';

} else {

    urlDB = process.env.MONGO_URI;
}


// ================================
// Vencimiento del token
// ================================
// 60seg * 60 min * 21h * 30 d
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// ================================
// SEED
// ================================
process.env.SEED = process.env.SEED || 'este-es-el-seed-de-desarrollo'



process.env.URLDB = urlDB;



// ================================
// Google Client id
// ================================
process.env.CLIENT_ID = process.env.CLIENT_ID || '169714270063-bn4uqbonltkh28l6nhu4nbhufgeis7s0.apps.googleusercontent.com';