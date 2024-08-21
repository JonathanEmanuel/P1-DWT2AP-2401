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

const darPresente = function( nombre=null ){
    const fecha = new Date().toLocaleDateString();
    const hora = new Date().toLocaleTimeString();
    if( nombre==null){
        alert('Falta el parametro nombre')
    } else {
        console.log(`Se dio el Presente a ${ nombre }`);
    }
    // Retorna el valor de la variable Fecha
    return fecha;
}

let presente = darPresente( 'José' );
console.log('José ' + presente)
//console.log(nombre ); // No funciona porque nombre es un parametro local de la función


const sumar = function(n1, n2){
    let resultado = n1 + n2;
    return resultado
}

let suma = sumar(2, 4);
console.log('El valor de la suma es ' + suma);