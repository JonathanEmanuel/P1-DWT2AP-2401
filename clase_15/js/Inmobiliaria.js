class Inmobiliaria {
    lista = [];
    constructor(lista =[]){
        this.lista = lista
    }

    agregarInmueble( inmueble){
        this.lista.push(inmueble);
    }

    eliminarInmueble( direcccion ){

    }

    buscarPorTipo( tipo ){
        const inmuebles = this.lista.filter( item => item.tipo == tipo );
        return inmuebles;
    }

    buscarPorTipoDos ( tipo){
        const inmuebles = [];
        for(let i=0; i< this.lista.length; i++){
            if( this.lista[i].tipo == tipo){
                inmuebles.push( this.lista[i] );
            }
        }
        return inmuebles;
    }

    listarDisponibles(){

    }
    // Recorro la lista y muestro los inmuebles
    mostrarInmuebles(){
        console.table( this.lista);

        for (let i = 0; i < this.lista.length; i++) {
            const inmueble = array[i];
            console.log(`Dirección: ${inmueble.direcccion} - Tipo: ${inmueble.tipo} - Precio: ${inmueble.precio}`);
        }
    }
}