/* 4. Escriba un programa que solicite al usuario el precio de tres productos, y cree una
función que permita calcular la suma total del precio de los tres productos, mostrar
en consola la suma.  */

import readline from 'readline'

const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
})

const calcSuma = (n1,n2,n3) => parseFloat(n1) + parseFloat(n2) + parseFloat(n3)

rl.question("Ingrese el precio del primer producto: " , (producto1) =>{
    rl.question("Ingrese el precio del segundo producto: ", (producto2)=>{
        rl.question("Ingrese el precio del tercer producto: ", (producto3)=>{

            console.log(`Precio del producto1: $${producto1} \nPrecio del producto2: $${producto2} \nPrecio del producto3: $${producto3}`)
            console.log(`El precio total es de: $${calcSuma(producto1,producto2,producto3)}`)
            
            rl.close()
        })
    })
})