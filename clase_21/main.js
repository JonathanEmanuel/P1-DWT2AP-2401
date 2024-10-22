// Selecciono los elementos del HTML
const form = document.querySelector('form');
const txtTarea = document.querySelector('#txtTarea');
const btnCambiar = document.querySelector('#btnCambiar');
const alert1 = document.querySelector('#alert1');
const chkModo = document.querySelector('#chkModo');
// Agrego los escuchadores de eventos
console.log(form, txtTarea, btnCambiar, alert1);

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

    console.log(tarea); 
})
// Función 02 - Escucha el el evento focus y elimina la alerta de error
txtTarea.addEventListener('focus', () => {
    const alerta = document.querySelector('.error')
    alerta.remove();
})

btnCambiar.addEventListener('click', () =>{
    // Eliminamos una clase
    alert1.classList.remove('alert-primary');
    // Agregamos una clase
    alert1.classList.add('alert-success');
})

chkModo.addEventListener('change', () => {
    const valor = chkModo.checked;
    console.log('cambio de modo', valor);
    document.querySelector('body').classList.toggle('dark');
})