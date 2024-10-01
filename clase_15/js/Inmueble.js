class Inmueble {
    direcccion = '';
    tipo = '';
    precio = 0;
    disponible = false;

    constructor(direcccion, tipo, precio, disponible=true){
        this.direcccion = direcccion;
        this.tipo = tipo;
        this.precio = precio;
        this.direcccion = disponible
    }
}