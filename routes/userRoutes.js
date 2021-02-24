let express = require('express');
let router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.registro);
router.get('/registro', userController.registro);
router.post('/create', userController.create);
router.get('/listar', userController.leerTodos);
router.get('/usuario/:id/actualizar', userController.actualizar);
router.put('/usuario/:id/actualizar', userController.update);
router.delete('/usuario/:id/eliminar', userController.delete);

module.exports = router;