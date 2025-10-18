/* function miFuncion(){
    //Proceso a realizar

}

miFuncion(); */



/* function miSaludo() {
    console.log("Hola, desde javascript")
}

miSaludo(); */

/* function saludar(nombre){
    console.log("Hola " + nombre + ", Bienvenido");
}

saludar("Hugo"); */

/* let EnviarNombre = miSaludoObtenido("Elizabeth")


function miSaludoObtenido (nombre){
    let mensaje = "Hola " + nombre;

    return mensaje;
}
console.log(EnviarNombre) */

/* let saludo = function (nombre){
    saludar = `Hola ${nombre}`

    return saludar
}

console.log(saludo('Eli')) */

//FUNCIONES DE FLECHAS

let saludo = (nombre) => {
    return `Saludo ${nombre}`
}

console.log(saludo("Hugo")) 

let saludo2 = nombre2 => `Saludos ${nombre2}`
console.log(saludo2("Fabri")) 


