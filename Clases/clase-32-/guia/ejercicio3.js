/* 3-	Un cine desea automatizar el cálculo del precio de entrada según la edad del cliente.
Las tarifas son las siguientes:
•	Niños menores de 12 años: pagan $3.00
•	Adultos de 12 a 59 años: pagan $5.00
•	Adultos mayores de 60 años o más: pagan $2.50
El programa debe:
Pedir al usuario su edad.
Mostrar en pantalla el precio que debe pagar.
Mostrar un mensaje de error si la edad es negativa o no válida
 */

import readline from 'readline'

const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Ingrese su edad para mostrar el precio que debe pagar: ", (age)=>{
    let edad = Number(age)
    
    switch (true) {
        case (edad >= 0 && edad < 12):
            console.log("Debe pagar $3.00");
            break;

        case (edad >= 12  && edad <= 59):
            console.log("Debe pagar $5.00");
            break;

        case (edad >= 60 ):
            console.log("Debe pagar $2.50");
            break;

        default:
            console.log("ERROR: El valor ingresado no es valido")
            break;
    }
    rl.close()
})