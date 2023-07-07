const cursosModel = require('./../models/cursosModel') // traemos todo lo que tiene dentro 


exports.getCursos = async (req, res) => {
    //evaluamos el bloque dentro del try
    try {
        //obtenemos los datos desde el modelo
        const cursos = await cursosModel.obtenerCursos();

        //si todo va bien respondemos con los usuarios, del lado del cliente
        //lo obtenemos con json
        //status 200 que todo fue ok
        res.status(200).json({
            success: true,
            data: cursos
        })

    } catch (error) {
        //si las instrucciones dentro del bloque try fallan, 
        //capturamos el error, lo mostramos en consola
        //y devolvemos la info del error al cliente
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Hubo un error al obtener los datos'
        })
    }
}
//EL get"..." trae informacion, en este caso el curso por id.
exports.getCursosById = async (req, res) => { 
    const idCursos = req.params.id;
    try {
        const cursos = await cursosModel.getCursosById(idCursos)

        if (cursos.length < 1) {
            res.status(404).json({
                success: false,
                msg: `No existe el curso: ${idCursos}`
            })

        }
        res.status(200).json({
            success: true,
            cursos

        })
    }

    catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Hubo un error al obtener los datos de los Profesores'
        })
    }
}
//EL "add"(post)"..." lleva informacion, en este caso el curso a añadir.
exports.addCurso = async (req, res) => { 
    const nuevoCurso = req.body;
    try {
        const id = await cursosModel.addCurso(nuevoCurso)
        res.status(201).json({
            success: true,
            message: "Se agrego el curso",
            nuevoCurso
        })
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Hubo un error al obtener los datos'
        })
    }
}
//update actualiza/modifica
exports.updateCurso = async (req, res) => {
    const id = req.params.id;
    const cursoActualizado = req.body;

    const curso = {
        id,
        ...cursoActualizado  //muestra todo lo que necesitamos de forma mas breve
    }
    console.log(curso)
    try {
        const listaActualizada = await cursosModel.updateCurso(curso)
        if (listaActualizada < 1) {
            res.status(404).json({
                success: false,
                message: "datos no actualizados"
            })
         }
        res.status(200).json({
            success: true,
            message: "lista actualizada",
        curso
        })
     }
     catch(error) {
        res.status(500).json({
            success: false,
            message: "No anda"
        })
        }
    }
//delete para borrar cursos especificos (id:)
    exports.deleteCursoById = async(req, res)=>{

        const idCurso = req.params.id;
        try {
            const curso = await cursosModel.deleteCursoById(idCurso)
    
            if(curso.length<1){ //pregunto si existe el usuario
                res.status(404).json({
                    success:false,
                    mgs:`No existe usuario con el id: ${idCurso}`
                })
            }
            //si todo va bien y existe el usuario =D
            res.status(200).json({
                success:true,
                msg:"El usuario fue eliminado con exito"
            })
        } catch (error) {
    
            console.error(error);
            res.status(500).json({
                success:false,
                message: 'Hubo un error al eliminar el usuario'
            })
        }
    } 
//agrega estudiante al curso
    exports.addEstudianteToCurso = async (req, res) => {
        const estudianteId = req.params.id;
        const cursoId  = req.body;
      
        try {
         
          const result = await cursosModel.addEstudianteToCurso(estudianteId, cursoId);
      
          if (result.success) {
            return res.status(200).json({
              success: true,
              message: "Estudiante agregado al curso exitosamente."
            });
          } else {
            return res.status(404).json({
              success: false,
              message: result.message // Provide an appropriate error message
            });
          }
        } catch (error) {
          console.error(error);
          return res.status(500).json({
            success: false,
            message: "Hubo un error al agregar el estudiante al curso."
          });
        }
      };
//borra estudiante del curso
    exports.getEstudianteCursos = async (req, res) => {
        const idEstudiante = req.params.id;
        try {
            const estudiante= await estudiantesModel.getEstudianteCursos(idEstudiante)
    
            if (estudiante.length < 1) {
                return res.status(404).json({
                    success: false,
                    msg: `No existe el estudiante con: ${idEstudiante}`
                })
    
            }
            return res.status(200).json({
                success: true,
               estudiante
    
            })
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({
                success: false,
                message: 'Hubo un error al obtener los datos'
            })
        }
    }

    exports.getCursoEstudiantes = async (req, res) => {
        const idCurso= req.params.id;
        try {
            const curso= await cursosModel.getCursoEstudiantes(idCurso)
    
            if (curso.length < 1) {
                res.status(404).json({
                    success: false,
                    msg: `nO EXISTE: ${idCurso}`
                })
    
            }
            res.status(200).json({
                success: true,
                curso
    
            })
        }
    
        catch (error) {
            console.error(error);
            res.status(500).json({
                success: false,
                message: 'Hubo un error al obtener los datos'
            })
        }
    }
    exports.deleteEstudianteFromCursoById = async(req, res)=>{

        const idCurso = req.params.id;
        try {
            const curso = await cursosModel.deleteEstudianteFromCursoById(idCurso)
    
            if(curso.length<1){ //pregunto si existe el usuario
                res.status(404).json({
                    success:false,
                    mgs:`No existe usuario con el id: ${idCurso}`
                })
            }
            //si todo va bien y existe el usuario 
            res.status(200).json({
                success:true,
                msg:"El usuario fue eliminado con exito"
            })
        } catch (error) {
    
            console.error(error);
            res.status(500).json({
                success:false,
                message: 'Hubo un error al eliminar el usuario'
            })
        }
    } 
