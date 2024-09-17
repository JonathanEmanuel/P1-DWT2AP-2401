class Persona {
    // Atributos (Variables)
    nombre = '';
    apellido = '';
    edad = 0;
    #password = '1234';
    // Métodos (Fuciones)
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        console.log(`Soy el constructor de ${this.nombre}`);
    }
    saludar(){
        console.log(`Hola soy ${this.nombre}`);
    }
    setEdad(edad){
        this.edad = edad;
    }
}
