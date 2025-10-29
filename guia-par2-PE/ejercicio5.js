/* 5. Solicite al usuario una cadena y utilice una función que permita devolver el texto en
mayúsculas */

import readline from 'readline'

const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
})

const cadenaMayus = (cadena) => cadena.toUpperCase()

rl.question("Ingrese una cadena de texto: ", (texto) => {
    console.log(`Esta es el texto en mayusculas: ${cadenaMayus(texto)}`)

    rl.close()
})