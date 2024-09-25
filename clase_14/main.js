const frutas = ['manzana', 'pera', 'banana', 'naranja', 'manzana verde'];
                //  0         1        2          3   
const ordernar = () =>{
    frutas.sort();
    recorrer();
}
//ordernar();
console.table(frutas);
const buscar = (nombre) =>{
    // Retorna la pos, si no lo encuentra retorna -1
    const index = frutas.indexOf(nombre);
    return index;
}

const index =  buscar('bananasss');
console.log(`pos ${index}`);

const recorrer = () =>{
    const ol = document.querySelector('#lista');
    ol.innerHTML = '';
    frutas.forEach( (item, index) => {
        console.log(item, index)
        ol.innerHTML += `<li class="list-group-item"> ${item} </li>`;
    } )
}
recorrer();

const mapear = () =>{
    const nuevoArray = frutas.map( (item) => {
        return item.toUpperCase();
    })
    console.log(nuevoArray);
}
mapear();
const products = [
    {id:3, name: 'Pendrive 32gb', price: 32000, category: 'compu' },
    {id:1, name: 'Hub USB', price: 5000, category: 'compu' },
    {id:2, name: 'Mouse Gamer', price: 12000,category: 'compu' },
    {id:4, name: 'Taza', price:15000, category: 'bazar'}
]
// Pasar a mayuscula lo nombre
const arrayModificado = products.map( function(product){
    return { 
        name: product.name.toUpperCase(), 
        price: product.price,
        stock: 0
    }
});


console.table(arrayModificado)

const PreciosActualizados = products.map( (item) => {
    return { nombre: item.name, precioFinal: item.price * 1.1, precioLista: item.price };
})

// const PreciosActualizados2 = products.map( item => ({nombre: item.name, precioFinal: item.price * 1.1, precioLista: item.price}) )

console.table(PreciosActualizados);

const filtro = products.filter( function( item) {
    return ( item.price >= 8000 && item.category == 'compu') 
} )

//const filtro2 = products.filter( item =>( item.price >= 8000 && item.category == 'compu') )

console.table(filtro);