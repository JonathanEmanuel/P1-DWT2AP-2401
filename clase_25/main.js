/* --------------------- Seleccion los elementos del DOM -------------------- */
const ulContactos = document.querySelector('#ulContactos');
const btnAbrirModal = document.querySelector('#btnAbrirModal');
const btnCerrarModal = document.querySelector('#btnCerrarModal');
const btnOrdenar = document.querySelector('#btnOrdernar');
const txtBuscar = document.querySelector('#txtBuscar');
const selBuscarCategoria = document.querySelector('#selBuscarCategoria');
const txtNombre = document.querySelector('#txtNombre');
const txtTel = document.querySelector('#txtTel');
const selCategoria = document.querySelector('#selCategoria');
const btnGuardar = document.querySelector('#btnGuardar');
const modal = document.querySelector('#modalContacto');
const spanCantidad = document.querySelector('#cantidad');

const modalContacto = new bootstrap.Modal( modal, {});
// Variables Globales
let idActual = '';
let contactos = [];
let count = 0;

/* ----------------------- FUNCIÓN 00 - Cierra el modal y Limpia los controles ----------------------- */
btnCerrarModal.addEventListener('click', ()=>{
    idActual = '';
    txtNombre.value = '';
    txtTel.value = '';
    selCategoria.value = 'personal';

    modalContacto.hide();
})

/* ----------------------- FUNCIÓN 01 - Abre el modal ----------------------- */
btnAbrirModal.addEventListener('click', () => {
    console.log('modal')
    // Limpiar la información del formulario
    txtNombre.value = '';
    txtTel.value = '';
    selCategoria.value = 'personal';
    idActual = '';
    modalContacto.show();
})

/* ---------------------- FUNCIÓN 02 - Guardar contacto --------------------- */
btnGuardar.addEventListener('click', () =>{
    console.log('guardar');
    const nombre = txtNombre.value;
    const tel = txtTel.value;
    const categoria = selCategoria.value;
    
    // ❗ Agregar luego las correspondientes validaciones

    // Verificamos si es una actualización o creación
    if( idActual === ''){  // Si es un nuevo contacto
        const id = crypto.randomUUID();
        const contacto = {
            id,
            nombre,
            tel,
            categoria
        }
        contactos.push(contacto);
    } else {
        const index = contactos.findIndex(  contacto => contacto.id == idActual );
        contactos[index].nombre = nombre;
        contactos[index].tel = tel;
        contactos[index].categoria = categoria;
    }

    modalContacto.hide();
    // Limpiamos los valores de los controles
    txtNombre.value = '';
    txtTel.value = '',
    selCategoria.value = 'personal';

    guardarLocal(contactos);
    renderizarLista(contactos);
    idActual = '';
})

/* ------------------- FUNCIÓN 03 - Guardar en el Storage ------------------- */
const guardarLocal = (contactos) => {
    localStorage.setItem('contactos', JSON.stringify(contactos));
}

/* ----------- FUNCIÓN 04 - Leer del Storage y llama a renderizarLista() ---------- */
const leerLocal = () => {
    const datos = JSON.parse( localStorage.getItem('contactos') );
/*     if( datos) {
        return datos;
    } else {
        return []
    } */
    return datos ? datos : [];
}

/* ------------------------- FUNCIÓN 05 - Renderizar Contactos ------------------------ */
const renderizarLista = (contactos) => {
    ulContactos.innerHTML = '';
    // Actualizo el contador de contactos
    spanCantidad.innerText = contactos.length;
    console.table(contactos);
    contactos.forEach(contacto => {
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.setAttribute('data-id', contacto.id)

        const strong = document.createElement('strong');
        strong.textContent = contacto.nombre

        const div = document.createElement('div');
        div.classList.add('btns');

        const btnEliminar = document.createElement('button');
        btnEliminar.classList.add('btn');
        btnEliminar.classList.add('btn-danger');
        btnEliminar.innerText = 'X';

        const btnEditar = document.createElement('button');
        btnEditar.classList.add('btn');
        btnEditar.classList.add('btn-primary');
        btnEditar.innerText = 'E';

        li.appendChild(strong);
        li.appendChild(div);
        div.appendChild(btnEliminar);
        div.appendChild(btnEditar);

        ulContactos.appendChild(li);

        // Agregreo un escuchador de evento 
        btnEliminar.addEventListener('click', eliminarContacto);
        btnEditar.addEventListener('click', editarContacto);
    });
}

/* --------------------- FUNCIÓN 06 - ELiminiar contacto --------------------- */
const eliminarContacto = (elemento) => {
    const li = elemento.target.parentNode.parentNode;
    const id = li.getAttribute('data-id');

    if( confirm('¿Confirma eliminar el contacto?')  ){
        // Elimino el contacto del array
        const index = contactos.findIndex(  contacto => contacto.id == id );
        contactos.splice(index, 1);
        // Elimino el elemento del HTML
        li.remove();

        spanCantidad.innerText = contactos.length;

        // Guardo el array actualizado
        guardarLocal(contactos);
    }

   
}

/* ---------------------- FUNCIÓN 07 - Editar contacto ---------------------- */
const editarContacto = (elemento) => {
    const li = elemento.target.parentNode.parentNode;
    const id = li.getAttribute('data-id');
    const contacto = contactos.find( item => item.id == id);
    console.log(contacto);
    idActual = contacto.id;
    txtNombre.value = contacto.nombre;
    txtTel.value = contacto.tel,
    selCategoria.value = contacto.categoria;

    modalContacto.show();

}

/* ---------------------- FUNCIÓN 08 - Filtro por categoría ------------------- */
selBuscarCategoria.addEventListener('change', () => {
    const categoria = selBuscarCategoria.value; 
    if( categoria != ''){
        const contactosFiltrados = contactos.filter(   item => item.categoria == categoria  );
        //console.table(contactosFiltrados);
        renderizarLista(contactosFiltrados);
    } else {
        renderizarLista(contactos);
    }
})

/* -------------------- FUNCIÓN 09 - Filtro por palabra ---------------------- */
txtBuscar.addEventListener('input', () => {
    const filtro = txtBuscar.value.toLowerCase();
    //console.log(filtro);
    const contactosFiltrados = contactos.filter( item => item.nombre.toLowerCase().includes( filtro  )  );
    renderizarLista(contactosFiltrados);
})

/* ------------------------ FUNCIÓN 10 - Ordenar por Nombre  -------------------- */
btnOrdenar.addEventListener('click', () => {
    console.log('Ordenando por nombre');
    const contatosOrdenados = contactos.sort( (a, b) => {
        if( a.nombre > b.nombre){
            return -1;  // Ordeno descendentemente
        }
        if( b.nombre < a.nombre ){
            return 1;
        }
        return 0;
    }  )
})

contactos = leerLocal();
renderizarLista(contactos)