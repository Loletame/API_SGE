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
exports.getCursosById = async (req, res) => {
    const idCursos = req.params.id;
    try {
        const cursos = await cursosModel.getCursosById(idCursos)

        if (cursos.length < 1) {
            res.status(404).json({
                success: false,
                msg: `nO EXISTE: ${idCursos}`
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
