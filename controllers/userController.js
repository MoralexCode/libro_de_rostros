let userModel = require('../models/userModels');
const UserController = {
    registro: (req, res) => {
        res.render('registro');
    },
    create: (req, res) => {
        let { name, surname, email, password } = req.body;
        let id = userModel.length + 1;
        const nuevoUsuario = { id, name, surname, email, password }
        userModel.push(nuevoUsuario);
        console.log('nuevoUsuario |', userModel);
        res.render('listar-todos', { usuarios: userModel });
    },
    leer: (req, res) => {
        res.send('Vista listar Usuario');
    },
    read: (req, res) => {
        res.send('listar un usuario');
    },
    actualizar: (req, res) => {
        let id = req.params.id;
        console.log('id |', id);
        let usuario = userModel[id - 1];
        // let usuario = userModel.find((user) => {
        //     if (user.id === parseInt(id)) {
        //         return user;
        //     }
        //     return {};
        // });
        res.render('actualizar', { usuario: usuario });
    },
    update: (req, res) => {
        let id = req.params.id;
        let usuarioActualizado = req.body;
        console.log('id |', id, ' | query |', req.query, ' | body | ', usuarioActualizado);
        res.send('Actalizar un usuario');
    },
    delete: (req, res) => {
        res.send('Eliminar un usuario');
    },
    leerTodos: (req, res) => {
        res.render('listar-todos', { usuarios: userModel });
    },
    readAll: (req, res) => {
        res.send('listar un usuarios');
    }
};
module.exports = UserController;