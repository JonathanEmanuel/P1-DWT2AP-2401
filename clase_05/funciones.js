const darPresente = function( nombre=null ){
    const fecha = new Date().toLocaleDateString();
    const hora = new Date().toLocaleTimeString();
    if( nombre==null){
        alert('Falta el parametro nombre')
    } else {
        console.log(`Se dio el Presente a ${ nombre }`);
    }
    // Retorna el valor de la variable Fecha
    return fecha;
}

let presente = darPresente( 'José' );
console.log('José ' + presente)