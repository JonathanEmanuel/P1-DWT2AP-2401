/* ------------------- SELECCIONAMOS LOS ELEMENTOS DEL DOM ------------------ */
const rowProductos = document.querySelector('#rowProductos');
const txtBuscar = document.querySelector('#txtBuscar');
const filtroCategoria = document.querySelector('#filtroCategoria');
const btnCarrito = document.querySelector('#btnCarrito');

/* --------------------- CREAMOS LAS VARIABLAS GLOBALES --------------------- */
const productos = [
    { id: 1, name: "Computadora i7", description: 'Computadora i7, 16gb Ram, Disco m2 1tb', price: 500, category: 'informatica', pic: 'images/desktop.png'},
    { id: 2, name: "Notebook i5", description: 'Notebook i5, 12gb Ram, Disco 500gb', price: 300, category: 'informatica', pic: 'images/laptop.png'},
    { id: 3, name: "Celular Motorola", description: 'Motorola G4 4gb', price: 400, category: 'celulares', pic: 'images/mobile.png'},
    { id: 4, name: "Samsung Galaxy s22", description: 'Celular 4g', price: 600, category: 'celulares', pic: 'images/mobile2.png'},
];
const carrito = [];

/* ------------------ FUNCIÓN 01 - Renderiza los productos ------------------ */
const renderizarProductos = (lista) =>{
    rowProductos.innerHTML = '';
    lista.forEach(producto => {
        console.log(producto);
        const card = document.createElement('div');
        card.classList.add('card');
        card.classList.add('col-md-3');
        card.classList.add('col-lg-2');

        const img = document.createElement('img');
        img.classList.add('img-card-top');
        img.setAttribute('alt', producto.name);
        img.setAttribute('src', producto.pic);
        // agrego la img a card como hijo
        card.appendChild( img );

        const cardBody = document.createElement('card-body');
        cardBody.classList.add('card-body');

        const h4 = document.createElement('h4');
        h4.classList.add('card-title');
        h4.innerText = producto.name;

        const p = document.createElement('p');
        p.classList.add('card-text');
        p.innerText = producto.description;

        const i = document.createElement('i');
        i.classList.add('fa-solid');
        i.classList.add('fa-cart-plus');

        const btn = document.createElement('a');
        btn.classList.add('btn');
        btn.classList.add('btn-primary');
        //btn.innerText = "Carrito";
        btn.appendChild(i);

        cardBody.appendChild( h4);
        cardBody.appendChild( p);
        cardBody.appendChild(btn);

        card.appendChild(cardBody);

        // Agrego la card a la row
        rowProductos.appendChild(card);
    });
}


renderizarProductos(productos);