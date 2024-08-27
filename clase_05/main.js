
// () => { }


const sumar = (n1, n2) => {
    let r = n1 + n2;
    return r;
}

const mostrarResultado = (num1, num2) => {
    let resultado = sumar(num1, num2);
    document.querySelector('#mensaje').innerText = resultado;
}

mostrarResultado(2,4);
