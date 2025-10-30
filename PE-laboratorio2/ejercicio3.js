import readline from 'readline'

const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let productos = [] 
let iva = 0.13

rl.question("Ingrese el precio del primer producto:$",(precio1)=>{
    productos[0]=parseFloat(precio1);

    rl.question("Ingrese el precio del primer producto:$",(precio2)=>{
        productos[1]=parseFloat(precio2);

        rl.question("Ingrese el precio del primer producto:$",(precio3)=>{
            productos[2]=parseFloat(precio3);

            let subTotal = productos[0] + productos[1] + productos[2]
            let apliIVA = (productos[0] + productos[1] + productos[2]) * iva
            let total = subTotal + apliIVA

            console.log(`SubTotal: $${subTotal}`)
            console.log(`IVA:$${apliIVA}`)
            console.log(`Total a pagar: $${total}`)

            rl.close()
        })
    })
})