const db = require('./../config/db');
const { Router } = require("express");

// tiene que ser asincronica porque todo se ejecuta al mismo tiempo y de esa manera anda
// el console log

exports.obtenerUsuarios = async () => {
    const [rows, fiels] = await db.execute('SELECT * FROM usuarios')
    console.log(rows)
    return rows;
}

exports.addUsuario  = async (nuevoUsuario) => {
    
    const [rows, fields] = await db.execute('INSERT INTO usuarios (nombre, contraseña) VALUES (?, ?)', [nuevoUsuario.nombre, nuevoUsuario.contraseña]);
    return rows;
}