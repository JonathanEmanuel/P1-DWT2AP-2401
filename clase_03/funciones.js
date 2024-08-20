// Variables Globales
let nombre = 'Julieta';
let edad = 25;
console.log(`Hola ${nombre}!`);

function dw(){
    document.write('Hola Juan');
}
// Definimos la función
function darAsistencia(){
    // Variables locales
    let comision = 'DW2TA';
    let nombre = prompt('Como te llamas?');
    let fecha = new Date().toLocaleDateString();
    console.log('Se dio el Presente a ' + nombre + ' de la comisón ' + comision);
}
// Definimos la función
const darAusente = function(){
    // Variable local
    let comision = 'DW2TA';
    let nombre = 'Carlos'
    console.log('Se dio el Ausente a ' + nombre + ' de la comisón ' + comision);
}
// Llamamos a la función
//darAusente();
// console.log(`Es la comisión ${ comision } y el estudiantes ${nombre}`);
// -> Este código da error porque no puedo llamar por fuera a una variable local 