const usuariosModel = require('./../models/usuariosModel') 
const bcryptjs = require("bcryptjs")

exports.getUsuarios = async (req, res) => {

    try {

        const user = await usuariosModel.obtenerUsuarios();

        res.status(200).json({
            success: true,
            data: user
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Hubo un error al obtener los datos'
        })
    }
}

exports.addUsuario = async (req, res) => {
    const nuevoUsuario = req.body;
    try {
        let passwordHash = await bcryptjs.hash(nuevoUsuario.contraseña, 8) ;
        nuevoUsuario.contraseña = passwordHash;
        const id = await usuariosModel.addUsuario (nuevoUsuario)
          
        res.status(201).json({
            success: true,
            message: "el nuevo usuario ha sido agregado con exito",
            nuevoUsuario: nuevoUsuario
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