const express = require ('express');
const router = express.Router();

const mainController = require ('../controllers/mainController')
const productController = require ('../controllers/productController')
const usersController = require ('../controllers/usersController')

router.get('/', mainController.index);
router.get('/producto', productController.producto);
router.get('/carrito', productController.carrito);
router.get('/login', usersController.login);
router.get('/registro', usersController.register);

module.exports = router;