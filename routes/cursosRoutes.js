const express = require ('express')
const router = express.Router();
const cursosController = require ('./../controllers/cursosController');
const { validarCampos } = require('../middlewares/validarCampos');
const { check } = require('express-validator');

// definimos las rutas y derivamos al controlador correspondiente. Una interfaz que dice donde se manejan estas cosas

// le decimos cual se encarga de resolver el GET

router.get('/', cursosController.getCursos);
router.get('/:id', cursosController.getCursosById);
router.post('/', cursosController.addCurso);
router.post ('/', [ 
    check ('nombre',"Nombre es obligatorio").not().isEmpty(),
    check ('descripcion', "La descripicion es obligatoria").not().isEmpty(),
validarCampos
]
,cursosController.addCurso);
router.put('/:id', cursosController.updateCurso);
router.put('/:id', [
    check ('nombre', "El nombre es obligatorio").not().isEmpty(),
    check ('descripcion', "La descripcion es obligatoria").not().isEmpty(),
    validarCampos
]
,
cursosController.updateCurso);

router.delete('/:id', cursosController.deleteCursoById);

router.get ('/:id/estudiantes', cursosController.getCursoEstudiantes);
router.post('/:id/estudiantes',cursosController.addEstudianteToCurso);
router.delete ('/:id/estudiantes/:estudianteId', cursosController.deleteEstudianteFromCursoById);





module.exports = router;

    
