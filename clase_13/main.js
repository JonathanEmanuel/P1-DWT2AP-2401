const colores = ['azul', 'rojo', 'verde'];

console.table(colores);
// Agregamos un elemento al final al array
colores.push('Negro');
console.log(colores.length);

// Eliminamos el último un elemento
colores.pop();
// Eliminamos el primer elemento
colores.shift();
// Agregamos un elemento al inicio al array
colores.unshift('Violeta');

colores.push('Blaco')
console.table(colores);

// Eliminamos un elemento por posición
colores.splice(2, 1);
console.table(colores);

const lista1 = [ 1, 2, 3 ];
const lista2 = [ 5, 6, 7 ];
// Unimos dos arrays
const listaFinal = lista1.concat( lista2);

console.log(listaFinal);
// Para ordenar los elementos de un array
listaFinal.sort();
console.log(listaFinal);

nombres = ['juan', 'ana', 'pedro', 'zoe'];
nombres.sort( function (a, b){
    if( a > b){
        return -1;  // Ordeno descendentemente
    }
    if( b < a ){
        return 1;
    }
    return 0;
} );

const products = [
    {id:3, name: 'Pendrive 32gb', price: 32000},
    {id:1, name: 'Hub USB', price: 8000},
    {id:2, name: 'Mouse Gamer', price: 12000}

]

const mostrar = () => {
    const lista = document.querySelector('#lista');
    lista.innerHTML = '';
    // Recorro el array y los renderizo en el html
    for (const item of products) {
        lista.innerHTML += `<li class="list-group-item"> 
                                ${ item.name} | ${item.price}
                            </li>`;
    }
}
mostrar();
const ordenarPrecioBajo = () => {
    products.sort( function(a, b){
        if( a.price > b.price){
            return 1;
        }
        if( a.price < b.price ){
            return -1;
        }
        return 0;
    });
}

const ordenarPrecioAlto = () => {
    products.sort( (a, b) => {
            if( a.price > b.price){
                return -1; // Order ASC
            }
            if( a.price < b.price ){
                return 1;
            }
            return 0;
    });
}

ordenarPrecioBajo();
console.table(products);
