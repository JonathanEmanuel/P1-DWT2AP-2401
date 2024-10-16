const tasks = [];
const form = document.querySelector('#formulario');
const inputDescripcion = document.querySelector('#inputDescripcion');
const inputFecha = document.querySelector('#inputFecha');
const contadorPendientes = document.querySelector('#contadorPendientes');
const contadorFinalizadas = document.querySelector('#contadorFinalizadas');
const listaTareas = document.querySelector('#listaTareas');
const mensajeError = document.querySelector('#mensajeError');
form.addEventListener('submit', ( evento)=>{
    evento.preventDefault();
    console.log('Evento del formulario');
    // Leemos el valor del input .value 
    const descripcion = inputDescripcion.value;
    const fecha = inputFecha.value; 

    if( descripcion.trim() == ''){
        mensajeError.innerText = 'Por favor, complete la Descripción';
        return;
    }

    if( fecha == ''){
        mensajeError.innerText = 'Por favor, complete la Fecha';
        return;
    }
    // Agregamos la tarea el array
    tasks.push({ 
        fecha: fecha,
        descripcion: descripcion,
        completada: false
    })
    console.table( tasks);
    // Limpiamos los inputs
    inputDescripcion.value = "";
    inputFecha.value = "";
    renderizarTareas(tasks);
})

inputDescripcion.addEventListener('focus', () =>{
    mensajeError.innerText = '';
    console.log('Se ejecuto el evento focus')
})

inputFecha.addEventListener('focus', () => {
    mensajeError.innerText = '';
})

/* ----  FUNCIÓN 04 - Creamos la tarea en el DOM ---- */
const renderizarTareas = ( tasks ) => {
    listaTareas.innerHTML = '';

    tasks.forEach( task => {
        // Creamos una elemento del DOM
        const li = document.createElement('li');
        // Agregamos una clase al li
        li.classList.add('list-group-item');
        li.classList.add('d-flex');
        li.classList.add('justify-content-between');
        const div = document.createElement('div');
        div.classList.add('d-flex');
        div.classList.add('flex-column');
        const spanFecha = document.createElement('span');
        const i = document.createElement('i');
        i.classList.add('fa-solid');
        i.classList.add('fa-calendar');
        i.innerText = ' ' + task.fecha;
        spanFecha.appendChild(i);
        const spanDescripcion = document.createElement('span');
        
        spanDescripcion.innerText = task.descripcion;
        div.appendChild(spanFecha);
        div.appendChild( spanDescripcion);
        li.appendChild(div);
        console.log(task, li, spanDescripcion);

        // Crear el span de los botones
        const spanBtn =  document.createElement('span');
        const btn1 = document.createElement('button');
        btn1.classList.add('btn');
        const icheck = document.createElement('i');
        icheck.classList.add()
        li.appendChild(spanBtn);
        listaTareas.appendChild(li);
    });
}
/*
<li class="list-group-item d-flex justify-content-between">
    <div class="d-flex flex-column">
        <span><i class="fa-solid fa-calendar"></i> 16-10-24</span>
        <span>Tarea 1 das dasdasdsadsadsa</span>
    </div>
    <span>
        <button type="button" class="btn btn-success"><i class="fa-solid fa-square-check"></i></button>
        <button type="button" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
    </span>
</li>
*/