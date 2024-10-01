const inmobiliaria = new Inmobiliaria();

const inmueble1 = new Inmueble('Calle Siemprem viva 742', 'casa', 40000);

const inmueble2 = new Inmueble('Calle False 123', 'departamente', 30000);

function agregarInmueble(){
    const direccion = prompt('Ingrese la dirección');
    const tipo = prompt('Ingrese el tipo');
    const precio = +prompt('ingrese el precio');

    const inmueble1 = new Inmueble(direccion, tipo, precio);

    inmobiliaria.agregarInmueble(inmueble1, 10) ;
}