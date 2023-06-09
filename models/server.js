// obtengo datos y en controllers uso esos datos para cosas
// levantamos todo lo que instalamos
const express = require('express');
const cors = require('cors')
const morgan = require('morgan')


class Server {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
        this.app.use(express.json());
    }
    routes(){
        this.app.use('/estudiantes', require('../routes/estudiantesRoutes'));
        this.app.use('/profesores', require('../routes/profesoresRoutes'));
        this.app.use('/cursos', require('../routes/cursosRoutes'))
        this.app.use('/usuarios', require('../routes/usuariosRoutes'))
    }
    middlewares(){
        this.app.use(express.json());
        this.app.use(cors()); //muestra en la consola
        this.app.use(morgan())
    }
    listen(){ // le decimos que se comunique por medio de este puerto
        this.app.listen(3000,()=>{
            console.log('Servidor corriendo en el puerto 3000');
        })
    }
}

module.exports = Server;