let express = require('express');
let router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.registro);
router.get('/registro', userController.registro);
router.post('/create', userController.create);
router.get('/usuarios', userController.leerTodos);
router.get('/usuarios/:id', userController.read);
router.put('/usuarios/:id/actualizar', userController.update);
router.delete('/usuarios/:id/eliminar', userController.delete);

module.exports = router;