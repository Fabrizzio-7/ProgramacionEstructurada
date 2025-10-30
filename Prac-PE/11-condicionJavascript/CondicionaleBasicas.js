/* • Crea un programa que solicite un número y determine si es positivo, negativo o
cero. Muestra el resultado en consola.
 */

import readline from 'readline'

const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

/* rl.question("Ingrese un numero para ver si es positivo, negativo o cero: ", (num) => {

const numero = Number(num);

if (numero > 0){
    console.log("El numero que ingreso es positivo")
}else if (numero < 0) {
    console.log("El numero es negativo")    
}else if (numero === 0) {
    console.log("El número es 0");
} else {
    console.log("No ingresó un número válido");
}

    rl.close()
}) */

/* • Escribe un programa que pida la edad de una persona y determine si es: menor de
edad (menor de 18), adulto (18-64) o adulto mayor (65 o más). */

/* rl.question("Ingrese la edad de una persona: ", (age) =>{

const edad = Number(age);

if (edad < 18){
    console.log("Esta persona es menor de edad")
}else if (edad < 65 ){
    console.log("Esta persona es un adulto")
}else if (edad > 64) {
    console.log("Esta persona es un adulto mayor")
}else{
    console.log("Edad no valida")
}

rl.close()
}) */

/* • Implementa un programa que solicite tres números y determine cuál es el mayor de
los tres.  */

rl.question("Ingrese 3 numros para determinar cual es mayor: ", (n1) => {
    let num1 = Number(n1)
    let num2 = Number(n2)
    let num3 = Number(n3)
})