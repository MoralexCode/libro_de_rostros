const fs = require('fs');

function guardia(req, res, next) {
    let texto = new Date().toISOString() + ' | ALERT | usuario sin acceso intento eliminar a un usuario | ' + req.url + '\n';
    fs.appendFileSync('alert.txt', texto);
    next();
}

module.exports = guardia;