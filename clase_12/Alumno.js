class Alumno {
    // Propiedades
    nombre = '';
    materias = [];
    // Métodos
    constructor(nombre){
        this.nombre = nombre;
    }
    ingresarNombre(nombre){
        this.nombre = nombre;
    }
    // Recibe una materia y la agrega al array de materias
    guardarMateria(materia){
        this.materias.push(materia);
    }
    calcularPomedio(){
        // Recorremos el array de materias y sumamos las notas
        let suma = 0;
        for (const item of this.materias) {
            suma += item.nota;
        }
        let promedio = suma / this.materias.length;
        return promedio;
    }
}