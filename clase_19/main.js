console.log('DOM II');
const titulo = document.querySelector('h1');
const p = document.querySelector('p');
// 1.Selecciono el Btn
const btnCambiar = document.querySelector('#btnCambiar');
const btnCambiarfoto = document.querySelector('#btnCambiarFoto');
const img = document.querySelector('#foto');

console.log( titulo, p);

const cambiarTexto = () => {
    titulo.innerText = 'otro título';
}
// 2.Escucho el evento click
btnCambiar.addEventListener('click', cambiarTexto);

btnCambiarfoto.addEventListener('click', () => {
    img.setAttribute('src', 'images/foto4.jpg');
    img.setAttribute('title', 'Nueva foto');
    // Desabilitamos el btn
    btnCambiarfoto.setAttribute('disabled', true);

})



// A partir del array y los dos btns creados realizar un script que al precionar siguiente cambien por la foto siguiente y los mismo con la anterior

const fotos = [
    'images/foto1.jpg',
    'images/foto2.jpg',
    'images/foto3.jpg',
    'images/foto4.jpg'
]
let i=0;
const btnAnterior = document.querySelector('#btnAnterior');
const btnSiguiente = document.querySelector('#btnSiguiente');
btnAnterior.addEventListener('click', () =>{
    i--;
    img.setAttribute('src', fotos[i]);
    console.log('<-');
})
btnSiguiente.addEventListener('click', () =>{
    i++;
    img.setAttribute('src', fotos[i]);
    console.log('->');
})