//1.
let edad = 17;
tieneEntrada = true;

puedeEntrar = edad > 13 && tieneEntrada ? "Puene entrar al cine" : "No Puede entrar al cine";
console.log(puedeEntrar)

//2.
let age = 61;
let tieneDiscapacidad = false;

let descuentoEspecial = age > 60 || tieneDiscapacidad ? "Aplica el descuento especial":"No aplica el descuento especial";
console.log(descuentoEspecial)

//3.
let nota = 6;
let pasoRecuperacion = true;

let aprobo = nota >= 7 || pasoRecuperacion ? "Si aprobo":"No aprobo"
