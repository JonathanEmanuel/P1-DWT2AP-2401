const ul = document.querySelector('#ul-list');
//                       0               1                2
let nombre = 'Jorge';
let edad = 21;
let estudiante =  true;
let materias = ['Maquetado', 'Programación I'];
/* ----------------------------- Objeto Literal ----------------------------- */
const objeto = {
    // Atributos: Las propiedad / Variables
    nombre: 'Rocio',
    apellido: 'Ruiz',
    edad: 25,
    estudiante: false,
    materias: [],
    // Métodos: Acciones / funciones
    loguear: function(){
        console.log('Iniciando sesión');
    },
    saludar: function(){
        return' Hola soy ' + this.nombre;
    }
}

console.log( objeto.nombre );  
objeto.loguear();
const mensaje = objeto.saludar();
console.info(mensaje);



