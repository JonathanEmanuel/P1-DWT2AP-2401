// Creamos una instancia del Objeto Persona
const p1 = new Persona('Rocio', 'Ruiz', 25 );
const p2 = new Persona('Karina', 'Suarez', 32);
// Probamos los métodos de las clases
p1.saludar();
p1.setEdad(27);
const edadP1 = p1.getEdad();
console.log(`Edad ${edadP1}`);

p2.saludar();
p2.setEdad(25);
console.log(`Edad ${ p2.getEdad() }`)
