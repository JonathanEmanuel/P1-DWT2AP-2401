const persona = {
    // Propiedades
    nombre: 'Emanuel',
    apellido: 'Ruiz',
    edad: 27,
    colores: ['rojo', 'verde', 'azul'],
    // Métodos
    saludar: function(){
        console.log(`Hola soy ${this.nombre} ` );
    },
    getEdad(){
        return this.edad;
    },
    setEdad(edad){
        this.edad = edad;
    }
}
persona.setEdad(30);
persona.nombre = 'José';
persona.saludar();
const edad = persona.getEdad();
console.log(`La edad es de ${edad}`);


let n1 = 2;
let n2 = 4;
n2 =  n1;

console.log(n2);