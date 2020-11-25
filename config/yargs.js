const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por Hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crear una tarea por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualizar el estado de una tarea', {
        descripcion,
        completado
    })
    .command('eliminar', 'Eliminar una Tarea por Hacer', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}


/* 
const argv....

comando crear 'Crear un elemento por Hacer'
    --descripcion - d

comando actualizar 'Actualizar el estado completado de una tarea'
    --descripcion - d
    --completado - c true

--help */