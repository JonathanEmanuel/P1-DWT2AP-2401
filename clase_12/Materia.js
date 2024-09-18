class Materia {
    // Propiedades
    nombre="";
    nota=0;
    // Métodos
    constructor(nombre, nota){
        this.nombre = nombre;
        this.nota = nota;
    }
    ingresarNombre(nombre){
        if( nombre != ""){
            this.nombre = nombre;
        } else {
            console.log('Ingrese un nombre');
        }
    }
    ingresarNota(nota){
        if( nota >= 1 && nota <=10){
            this.nota = nota;
        } else {
            console.log('Nota invalida');
        }
    }
    leerNota(){
        return this.nota;
    }
    // Retorna la información completa de la materia
    mostrarInformacion(){
        return `Materia: ${this.nombre} - Nota: ${this.nota} `
    }
}