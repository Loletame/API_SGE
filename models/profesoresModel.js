const db = require('./../config/db');
const{ Router} = require("express");
// tiene que ser asincronica porque todo se ejecuta al mismo tiempo y de esa manera anda
// el console log 
exports.obtenerProfesores = async () => {
    const [rows, fiels] = await db.execute('SELECT * FROM profesores')
    console.log(rows)
    return rows;
}
exports.getProfesoresById = async (id) => {
    const [rows, fields] = await db.execute('SELECT nombre, especialidad, email FROM profesores WHERE id=?', [id]);
    console.log(rows)
    return rows;
}

exports.addProfesor = async (nuevoprofesor) => {
    const [rows, fields] = await db.execute('INSERT INTO profesor (nombre, especialidad, email) VALUES (?, ?, ?)', [nuevoprofesor.nombre, nuevoprofesor.edad, nuevoprofesor.grado]);
    return rows;
}
exports.updateProfesor = async(profesor)=>{
    const [rows, fields] = await db.execute('UPDATE profesor SET nombre = ?, especialidad = ?, email = ? WHERE id = ?', [profesor.nombre, profesor.edad, profesor.grado, profesor.id]);
    return rows
}
exports.deleteProfesorById = async (id) =>{
    const [rows, fields] = await db.execute('DELETE FROM profesores WHERE id = ?', [id]);
    return rows
} 