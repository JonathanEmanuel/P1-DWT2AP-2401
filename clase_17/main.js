const nombre =  'Juan    ';
const nombre2= 'DANTE';
const email = 'Dante@davinci.EDU.AR';
const password = prompt('Ingrese la contraseña').trim();
const bio = 'Soy programado fullstack con los lenguajes JavaScript, PHP, python y mysql';

// Verificamos si usar php
const palabraClave = 'php';
if( bio.toLowerCase().includes(palabraClave)  ){
    console.info('Genial, podemos seguir con la entrevista 😎');
} else {
    console.log('Guardamos tus datos en nuestra base de datos 👀')
}

console.log(email, password)
if( (email.toLowerCase() === 'dante@davinci.edu.ar') && password === 'pepito'){
    console.log('Correcto');
} else {
    console.warn('Credenciales invalidas');
}

const nuevoText = nombre.toLowerCase();
console.log(nombre, nuevoText);
console.log(nombre2.toLocaleLowerCase());

console.log('En Mayúscula', nombre.toUpperCase() );

const primera =  nombre2.charAt(0);
console.log(primera);

const materias = [ 'Lógica de Programación', 'Programación I', 'Programación II', 'Aplicaciones para Dispositivos Móviles', 'Aplicaciones Web Progresivas', 'Aplicaciones Híbridas'];
// const renderizarMaterias = () => {}
function renderizarMaterias (materias){
    const ol = document.querySelector('#lista');
    ol.innerHTML = '';

    if( materias.length > 0){
        materias.forEach( materia => {
            ol.innerHTML += `<li class="list-group-item">${materia}</li>`
        });
    } else {
        ol.innerHTML += `<li class="list-group-item">No se encontraron resultados</li>`

    }

}
const buscar = () =>{
    const palabra = prompt('Ingrese la materia');
    const auxiliar = [];
    materias.forEach( materia => {
        // Si la materia contiene la palabra la agrego en el array aux
        if( materia.includes(palabra) ){
            auxiliar.push( materia);
        }
    })
    renderizarMaterias( auxiliar)
}
renderizarMaterias(materias);
// Solo remplaza la primera aparición, si queremos que reemplace todos lo carácteres tenemos que usar un expresión Regular [ Tema de próximas Clase ✔]
const dni = '40.200555';
const dniNormalizado = dni.replace('.', '');
console.log(dni, dniNormalizado);

const textoEjmplo = 'La Programación es un proceso Creativo';
const palabraBuscar = 'programacion';
const textoFormateado =  textoEjmplo.replace('ó', 'o');
console.log(textoFormateado);
if( textoEjmplo.toLowerCase().includes( palabraBuscar)){
    console.log('Se econtro la Palabra', palabraBuscar);
} else {
    console.warn('No se encontro la Palabra ', palabraBuscar);
}
