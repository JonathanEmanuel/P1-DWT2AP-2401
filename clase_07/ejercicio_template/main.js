const alumnos = [];
const tbody = document.querySelector('tbody');
const cargarAlumno = () =>{
    // Solicito los datos
    const nombre = prompt('Ingrese el nombre');
    const apellido = prompt('Ingrese el apellido');
    let nota;
    do {
        nota = +prompt('Ingrese la nota');
        if(nota < 0 || nota > 10 ) {
            alert('Nota invalida');
        }
    } while( nota < 0 || nota > 10)

    // Creo el array asociativo
    const alumno = [];
    alumno['nombre'] = nombre;
    alumno['apellido'] = apellido;
    alumno['nota'] =  nota;
    // Agrego el asociativo al Array Global
    alumnos.push(  alumno  );
}

const mostrarDatos = () =>{
    console.table( alumnos);
    // Limpiar el contenedor
    tbody.innerHTML = '';
    for( i in alumnos  ){
        const nombre = alumnos[i]['nombre'];
        const apellido = alumnos[i]['apellido'];
        const nota = alumnos[i]['nota'];
        color = nota >= 7 ? 'green' : 'red';
        tbody.innerHTML += `<tr>
                                <td> ${ (  parseInt(i)+1) }</td>
                                <td>${ nombre }</td>
                                <td>${ apellido }</td>
                                <td><span style="background-color:${color}">${ nota }</span></td>
                            </tr>`;
    }

}