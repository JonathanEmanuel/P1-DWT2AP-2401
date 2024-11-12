const spanCarrito = document.querySelector('#carrito');
const btnAdd = document.querySelector('#btnAdd');
const btnFinalizar = document.querySelector('#btnFinalizar');

const productos = [
    {id: 1, name: 'Mouse', price: 500 },
    {id: 2, name: 'Teclado', price: 900 }
]
const carrito = [];
// Agrega producto al carrito
btnAdd.addEventListener('click', (btn) =>{

    const id = btn.target.dataset.id;
    console.log(id)
    const producto = productos.find(  item => item.id == id);
    carrito.push( producto );
    guardarCarrito( carrito );
    actualizarCarrito();
    mostrarNotificacion( producto );

    console.table(carrito);
})


const mostrarNotificacion = ( producto) => {
    Toastify({
        text: `Agregado ${producto.name}`,
        gravity: "bottom", // `top` or `bottom`
        position: "right",  // left o right
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        duration: 3000
    }).showToast();
}

const actualizarCarrito = () =>{
    spanCarrito.textContent = carrito.length;
}

// Guarda el carrito en el localStorage
const guardarCarrito = ( carrito ) =>{
    localStorage.setItem('carrito',  JSON.stringify(carrito));
}

// Lee del localStorage el carrito
const leerCarrito = () => {
    let dataLocal = JSON.parse( localStorage.getItem('carrito') );
    // Verificamos si hay elemento en el localStorage
    dataLocal = dataLocal ? dataLocal : [];
    dataLocal.forEach( producto => {
        carrito.push( producto );
    });
    console.log(dataLocal);
}


btnFinalizar.addEventListener('click', () =>{
    Swal.fire({
        title: 'Carrito de Compras',
        text: 'Compra Finalizada',
        icon: 'success',
        confirmButtonText: 'Aceptar'
    })

    
})

leerCarrito();
actualizarCarrito();