# Simulador de Inmobiliaria

## Clase Inmueble: 
Crear una clase Inmueble que tenga los siguientes atributos:

- **direccion (string):** Dirección del inmueble  
- **tipo (string):** Tipo de inmueble (por ejemplo, "casa", "departamento", "local comercial")  
- **precio (number):** Precio de venta o alquiler  
- disponible (boolean): Indica si está disponible o no.

## Clase Inmobiliaria  
La clase Inmobiliaria manejará una lista de inmuebles y tendrá los siguientes métodos:

- **agregarInmueble(inmueble):** Añade un nuevo inmueble al array  
- **eliminarInmueble(direccion):** Elimina un inmueble por su dirección  
- **buscarPorTipo(tipo):** Retorna un array de inmuebles filtrados por su tipo (ej. "casa")  
- **listarDisponibles():** Retorna un array de inmuebles disponibles  
- **ordenarPorPrecio(ascendente = true):** Retorna los inmuebles ordenados por precio, en orden ascendente o descendente.

## Probar las clases

- Crear al menos 5 inmuebles con diferentes tipos, precios y estados de disponibilidad  
- Añadir esos inmuebles a la inmobiliaria  
- Buscar todos los inmuebles del tipo "casa"  
- Listar los inmuebles disponibles.  
- Ordenar los inmuebles por precio de manera ascendente y luego descendente

## Ejemplo de uso

``` js
const inmobiliaria = new Inmobiliaria();

const inmueble1 = new Inmueble('Calle Falsa 123', 'departamento', 120000);  
const inmueble2 = new Inmueble('Avenida Siempre Viva 742', 'casa', 90000);

inmobiliaria.agregarInmueble(inmueble1);  
inmobiliaria.agregarInmueble(inmueble2);

console.log('Buscar casas:', inmobiliaria.buscarPorTipo('casa'));  
console.log('Inmuebles disponibles:', inmobiliaria.listarDisponibles());  
console.log('Inmuebles ordenados por precio ascendente:', inmobiliaria.ordenarPorPrecio());  
console.log('Inmuebles ordenados por precio descendente:', inmobiliaria.ordenarPorPrecio(false));  
```