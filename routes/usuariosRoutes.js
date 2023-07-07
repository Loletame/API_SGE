const express = require ('express')
const router = express.Router();
const {check} = require('express-validator')
const {validarCampos} = require('./../middlewares/validarCampos')
const usuariosControllers = require ('./../controllers/usuariosControllers')

router.get('/', usuariosControllers.getUsuarios);

router.post('/',
    [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('contraseña', 'La contraseña es obligatoria').not().isEmpty(),
    validarCampos
    ]
    ,
    usuariosControllers.addUsuario
)

module.exports = router;