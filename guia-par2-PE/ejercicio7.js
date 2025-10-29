/* 7. Cree una función que permita calcular el descuento de un producto. Solicite al usuario
el precio de un producto y el porcentaje de descuento, devuelva el precio final. */

import readline from 'readline'

const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
})

function calcDescuento (precio, descuento){
    const descontado = parseFloat(precio) * parseFloat(descuento)
    return precio - descontado
} 

rl.question("Ingrese el precio del producto: ", (producto) => {
    rl.question("Ingrese el descuento (En decimales): ", (porcentaje) =>{

        console.log(`El precio final del producto es $${calcDescuento(producto, porcentaje)} Dolares`)
    })
})