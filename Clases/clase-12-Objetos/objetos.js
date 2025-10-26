import { Console } from "console";

const name = "Eli";
const age = 30;
const heigt = 1.50;

//Creacion de objetos con object literal
const persona = {
nombre: "Laura",
edad: 34,
altura: 1.56
}
//Imprimir el objeto
console.log(persona);

//acceder a las propiedades del objeto
//acceso por punto
console.log(persona.nombre);
//acceder a las propiedades por forma de corchete
console.log(persona["edad"]);

//Agregamos mas propiedades al objeto
persona.imagen = "imagen.jpg";

console.log(persona)

//Eliminar propiedades del objeto
delete persona.altura;
console.log(persona);

//Modifivamos el valor de una propiedad
persona.nombre="Elizabeth";
console.log(persona)

//Asignamos el valor del objeto a una variable
/* const nom = persona.nombre;
console.log(nom) */

//Desructuring

/* const {nombre} = persona;
console.log(nombre);

const {edad} = persona;
console.log(edad) */

const {nombre,edad} = persona
Console.log(nombre)
console.log(edad)



