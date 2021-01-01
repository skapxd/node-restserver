//  Puerto
process.env.PORT = process.env.PORT || 3055;

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

let urlDB;

// Base de datos
if (process.env.NODE_ENV === 'dev') {

    urlDB = 'mongodb://localhost:27017/cafe';

} else {

    urlDB = 'mongodb+srv://hbiaser132:vGDu3V0sTIfxBsDu@cluster0.cfl2q.mongodb.net/cafe';
}

process.env.URLDB = 'mongodb+srv://hbiaser132:vGDu3V0sTIfxBsDu@cluster0.cfl2q.mongodb.net/cafe';
// process.env.URLDB = urlDB;