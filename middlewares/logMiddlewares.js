const fs = require('fs');

function chismoso(req, res, next) {
    let texto = new Date().toISOString() + ' | INFO | El usuario pasó por aquí | ' + req.url + '\n';
    fs.appendFileSync('registro.txt', texto);
    next();
}

module.exports = chismoso;