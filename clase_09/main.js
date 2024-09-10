const ul = document.querySelector('#ul-list');
const strong = document.querySelector('#s-cantidad');
let listaContactos = [];
// Solicita el nombre y tel.
// Crear un objeto literal
// Los agrega al array ListaContactos
const agregar = () => {
    console.log('Agregar');
    const nombre = prompt('Ingrese el nombre');
    const tel = prompt('Ingrese el tel');
    // Versión corta
    //listaContactos.push( { nombre, tel } );

    const contacto = {
        nombre: nombre,
        tel: tel
    }

    listaContactos.push( contacto );
}
// Recorrer el array y los renderiza en el HTML
const mostrar = () => {
    ul.innerHTML = '';
    for (const contacto of listaContactos) {
        ul.innerHTML+=`<li class="list-group-item">${contacto.nombre} | ${contacto.tel}</li>`;
    }
}
// Vaciar los elementos del array
const eliminar = () =>{
    console.log('Eliminar Contactos');
    listaContactos = [];
    mostrar();
}

const modificar = () =>{
    const posicion = parseInt( prompt('ingrese la Posición'));
    const nombre = prompt('Ingrese el nombre');
    const tel = prompt('Ingrese el tel');

    listaContactos[posicion].nombre = nombre;
    listaContactos[posicion].tel = tel;
    mostrar();

}

/* const lista = [
    {nombre: 'Carlos', tel: '2123'},
    {nombre: 'Valentina', tel: '223'}
]
lista[0].tel = '0000'; */