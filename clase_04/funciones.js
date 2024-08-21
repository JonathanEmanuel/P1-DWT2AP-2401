// Variable Global
let siglas;

function ingresar(){ // Agregar validaciones!
    siglas = prompt('Ingrese las siglas dw, dm, dg');
    siglas = siglas.toLowerCase();
}

function mostrar(){
    if( siglas == 'dw'){
        console.info('Carrera Diseño Web');
    } else if( siglas == 'dm'){
        console.info('Carrea Diseño Multimedial');
    } else if( siglas === 'dg'){
        console.info('Carrea Diseño Gráfico');
    } else {
        console.error('Siglas invalidas');
    }
}