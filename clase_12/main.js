const listaAlumnos = [];
// Solicita el nombre del alumno, crea el objeto alumno
// Solcita en un bucle while o do while materias
// Agrega el objeto alumno en el array Global listaAlumnos
const cargarAlumno = () => {
    // Solicito el nombre del alumno y creo el objeto alumno
    const nombre = prompt('Ingrese el Nombre');
    const alumno = new Alumno(nombre);

    do{ 
        // Solicito los datos de la materia y creo el objeto materia
        const nombreMateria = prompt('Ingrese la materia');
        const notaMateria = +prompt('Ingrese la nota de la materia');
        const materia = new Materia(nombreMateria, notaMateria);
        alumno.guardarMateria(materia);

    } while( confirm('¿Seguir agregando materias?'))

    // Agrega el objeto alumno en el array Global listaAlumnos
    listaAlumnos.push(alumno);
}

const mostrarDatos = () => {

}



const a1 = new Alumno('Rocio');
const a2 = new Alumno('Carlos');
const a3 = new Alumno('José');


const m1 = new Materia('Programación I', 8);
const m2 = new Materia('Logica de Programación', 9);
const m3 = new Materia('Programación II', 10);
const m4 = new Materia('Maquetado y Desarrollo Web', 8);
m1.ingresarNota(10);
a1.ingresarNombre('Josefina');
a1.guardarMateria(m1);
a1.guardarMateria(m2);
a1.guardarMateria(  new Materia('Comunicación visual', 7) );
console.log(a1)

const promedio = a1.calcularPomedio();
console.log(`Alumno ${a1.nombre} con promedio ${promedio}`);