const ul = document.querySelector('#ul-list');
//                       0               1                2
const productos = ['Teclado Gamer', 'Mouse Gamer', 'Monitor Gamer', 'Pendriver'];

const renderizarProductos = (lista) => {
    for( item of lista) { // Obtiene el elemento del array y crea la var item
        ul.innerHTML += `<li>${ item }</li>`;
    }
    /*
        for(i in lista) {  // Obtiene la posicion
        ul.innerHTML += `<li>${ lista[i]}</li>`;
    }
    */

    // Clasica
    /*
    for(let i=0; i<= lista.length; i++){
        ul.innerHTML += `<li>${ lista[i]}</li>`;
    }
    */
}

//renderizarProductos( productos );

const matriz = [
    ['a', 'b', 'c'],
    [ 1,   2,   3],
    ['d', 'e', 'f']
];

ul.innerHTML = `<li> ${  matriz[1][2]  } </li>`;
// Mostrar la letra 'f'
ul.innerHTML += `<li> ${  matriz[2][2]  } </li>`;

const alumno = [];
alumno['nombre'] = 'Maria';
alumno['apellido'] = 'Ruiz';
alumno['regular'] = true;
alumno['dni'] = 20321;

const alumno2 = [];
alumno2['nombre'] = 'José';
alumno2['apellido'] = 'Herrera';
alumno2['regular'] = true;
alumno2['dni'] = 40321;

const alumnos = [ alumno, alumno2 ];
ul.innerHTML += `<li> ---------------- </li>`;
ul.innerHTML += `<li> ${  alumnos[0]['nombre']  } </li>`;
ul.innerHTML += `<li> ${  alumnos[1]['dni']  } </li>`;

ul.innerHTML += `<li> ---------------- </li>`;



ul.innerHTML += `<li> ${  alumno['nombre']  } </li>`;
ul.innerHTML += `<li> ${  alumno['apellido']  } </li>`;
ul.innerHTML += `<li> ${  alumno['regular']  } </li>`;
ul.innerHTML += `<li> ${  alumno['dni']  } </li>`;
ul.innerHTML += `<li> ---------------- </li>`;

const mostrarAlumno = (alumno) => {
    for( clave in alumno ){
        ul.innerHTML += `<li> ${ alumno[clave]  } </li>`;
    }
}

mostrarAlumno(alumno);
