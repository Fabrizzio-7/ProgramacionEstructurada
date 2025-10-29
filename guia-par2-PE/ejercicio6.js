/* 6. Solicite al usuario una temperatura en grados celsius y cree una función que permita
convertir esa temperatura Celsius a Fahrenheit */

import readline from 'readline'

const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
})

const celciusAFaren = (celcius) => parseFloat(celcius)*(9/5) + 32

rl.question("Ingrese la temperatura en celcius que quiera convertir a Fahrenheit: ", (temp) =>{
    console.log(`La temperatura en Fahrenheit es ${celciusAFaren(temp)} grados`)

    rl.close()
})