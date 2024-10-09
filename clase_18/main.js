const titulo = document.querySelector('h1');
const textoImportante = document.getElementsByClassName('text-danger');
const importante = document.querySelector('.text-danger');
const texto2 = document.querySelector('#text-2');
const btnCambiar = document.querySelector('#btn-cambiar');

console.log(textoImportante, importante, texto2);
console.log(titulo);


// Modificamos el contenido
titulo.textContent = 'Clase 18 - DOM';

// Modificamos los estilos
texto2.style.color = 'green';
titulo.style['font-size'] = '32px';

// Si selecciono todos lo p y obtengo un NodeList 
const listaP = document.querySelectorAll('p');
console.log(listaP);
listaP[2].textContent += ' ----'

listaP.forEach(element => {
    console.log(element.style.textDecoration = 'underline');
});



// Escuchamos el evento click
btnCambiar.addEventListener('click', () =>{
    titulo.textContent = 'Título modificado';
    titulo.style.color = 'red';
})


