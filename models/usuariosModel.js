const db = require('./../config/db');
const { Router } = require("express");


exports.obtenerUsuarios = async () => {
    const [rows, fiels] = await db.execute('SELECT * FROM usuarios')
    console.log(rows)
    return rows;
}

exports.addUsuario  = async (nuevoUsuario) => {
    
    const [rows, fields] = await db.execute('INSERT INTO usuarios (nombre, contraseña) VALUES (?, ?)', [nuevoUsuario.nombre, nuevoUsuario.contraseña]);
    return rows;
}