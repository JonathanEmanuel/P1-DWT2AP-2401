const saludar = function(nombre = 'Usuario'){
    let texto = `Hola ${nombre}`.toUpperCase();
    return texto;
}

const mostrar = function(nombre){
    let mensaje = saludar(nombre);
    document.querySelector('#mensaje').innerText = mensaje;
}

mostrar('José');

const sumar= function(n1, n2){
    let r = n1 + n2;
    return r;
}

const mostrarResultado = function(num1, num2){
    let resultado = sumar(num1, num2);
    document.querySelector('#mensaje').innerText = resultado;
}

mostrarResultado(2,4);
