// Selecciono los elementos del HTML
const form = document.querySelector('form');
const txtTarea = document.querySelector('#txtTarea');
const btnCambiar = document.querySelector('#btnCambiar');
const alert1 = document.querySelector('#alert1');
const chkModo = document.querySelector('#chkModo');
const body = document.querySelector('body');
const listaTareas = document.querySelector('#listaTareas');
// Agrego los escuchadores de eventos


let tareas = [];
// Función 01- Escuchamos el evento submit del form y leemos el valor del input
form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const tarea = txtTarea.value;
    // Validamos texto completo y sea mayor a tres letras
    const alerta = document.createElement('div');
    //alerta.style.cssText = 'background-color: red; padding: 5px; color: white';
    alerta.classList.add('error');
    if( tarea.trim() == '' ){
        alerta.textContent = 'Complete la tarea';
        console.error('Complete la tarea');
        form.appendChild(alerta);
    }
    if( tarea.length < 3 ){
        console.error('La tarea debe ser mayor a tres letras');
        alerta.textContent = 'La tarea debe ser mayor a tres letras';
        form.appendChild(alerta);
    } 
    tareas.push( tarea );
    // Convertimos el array a un String para ser guardado en el localStorage
    const tareasString =  JSON.stringify( tareas);
    localStorage.setItem('tareas', tareasString );
    renderizarTareas(tareas);
    console.log(tarea); 
})
// Función 02 - Escucha el el evento focus y elimina la alerta de error
txtTarea.addEventListener('focus', () => {
    const alerta = document.querySelector('.error')
    alerta.remove();
})

// Funcion 03 - RenderizarTareas
// Recorre el array de tareas y crea cada div de la tarea
const renderizarTareas = ( tareas ) =>{
    // limpiamos el contenedor 
    listaTareas.innerHTML = '';
    tareas.forEach(element => {

        const alerta = document.createElement('div');
        alerta.classList.add('alert');
        alerta.classList.add('alert-primary');
        alerta.classList.add( 'mt-2');

        alerta.innerText = element;
        console.log(alerta);
        listaTareas.appendChild( alerta);
    });
}

btnCambiar.addEventListener('click', () =>{
    // Eliminamos una clase
    alert1.classList.remove('alert-primary');
    // Agregamos una clase
    alert1.classList.add('alert-success');
})

chkModo.addEventListener('change', () => {
    console.log('Se cambio el modo');
    const valor = chkModo.checked;

    if( valor == true){
        body.classList.add('dark'); // Agregamos la clase dark al body
        localStorage.setItem('dark', 'si'); // Guardamos el dato en el localStorage
    } else {
        localStorage.setItem('dark', 'no'); // Guardamos el dato en el localStorage
        body.classList.remove('dark'); // Eliminamos la clase dark del body
    }
})

const modo = localStorage.getItem('dark');
console.log('DARk: ', modo);
if( modo == 'si'){
    body.classList.add('dark');
    chkModo.checked = true;
} else {
    body.classList.remove('dark');
    chkModo.checked = false;
}

tareasString = localStorage.getItem('tareas');
tareas = JSON.parse( tareasString);
console.log(tareas);
// Llamamos a la función renderizarTareas
renderizarTareas(tareas);