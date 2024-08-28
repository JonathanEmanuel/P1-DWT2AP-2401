let materia1 = 'Lógica de Programación';
let materia2 = 'Comunicación Visual';
let materia3 = 'Diseño de intefacez';
// Versión Contructora
let frutas = new Array();


// Versión Literal          0                        1               2
let materias = [ 'Lógica de Programación', 'Comunicación Visual', 'Diseño de intefacez' ];

// Agrego elementos al Array
materias[0] = 'Lógica';

materias[3] = 'Marketing Digital';
// materias[10] = 'Programación II'; // Es mas complicado de lo que se hace
// Más sencillo
materias.push('Maquetado y Desarrollo Web');
materias.push('Análisis de Datos');
materias.push('Diseño Vectorial');
materias.push('Programación I');

/*
document.querySelector('#listaMaterias').innerHTML+=`<li>${materias[0]}</li>`; 
document.querySelector('#listaMaterias').innerHTML+=`<li>${materias[1]}</li>`; 
document.querySelector('#listaMaterias').innerHTML+=`<li>${materias[2]}</li>`;
document.querySelector('#listaMaterias').innerHTML+=`<li>${materias[3]}</li>`;
document.querySelector('#listaMaterias').innerHTML+=`<li>${materias[4]}</li>`;
*/
/*
let pos = 0;
for(let i=0; i<5; i++){
    document.querySelector('#listaMaterias').innerHTML+=`<li>${materias[pos]}</li>`; 
    pos++;
}
*/

let i=0;  // con el .length obtengo la cantidad de elementos que tiene el array
while( i < materias.length ) {
    document.querySelector('#listaMaterias').innerHTML+=`<li>${materias[i]}</li>`; 
    i++;
} 



/* console.log(materias);
// muestro la primer materia;
console.log( materias[0] ); */