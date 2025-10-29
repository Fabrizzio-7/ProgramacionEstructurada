/* 2. Escriba un programa que solicite al usuario una cadena de texto, este programa debe
de contener una función que reciba la cadena como parámetro y devuelva una nueva
cadena donde la primera letra de cada palabra esté en mayúsculas.  */

import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function cadenaUp(cadena) {
    const palabras = cadena.split(' ')
    const palabrasMayus = palabras.map(palabra => {
        return palabra[0].toUpperCase() + palabra.slice(1).toLowerCase()
    })
    return palabrasMayus.join(' ')
}

rl.question("Introduce una cadena de texto: ", (texto)=>{
    console.log(cadenaUp(texto))

    rl.close()
})