let express = require('express');
let router = express.Router();
const userController = require('../controllers/userController');
const guardia = require('../middlewares/usuarioNoAutorizado');
const { body } = require('express-validator');
const validateCreateForm = [
    body('name').notEmpty().withMessage('El nombre es requerido'),
    body('email').notEmpty().withMessage('El email es requerido')
    .isEmail().withMessage('El email deber de ser valido')
];
router.get('/', userController.registro);
router.get('/registro', userController.registro);
router.post('/create', validateCreateForm, userController.create);
router.get('/usuarios', userController.leerTodos);
router.get('/usuarios/:id', userController.read);
router.put('/usuarios/:id/actualizar', userController.update);
router.delete('/usuarios/:id/eliminar', guardia, userController.delete);

module.exports = router;