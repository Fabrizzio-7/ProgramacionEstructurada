//Solicitar al usuario tres gastos del mes y calcular el total gastado durante todo ese mes, mostrar por consola
//  cada uno de los gaastos y el total.
import readline from 'readline'

const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let gastos = [] 

rl.question("Ingrese el primer gasto del mes:$",(gasto1)=>{
    gastos[0]=parseFloat(gasto1);

    rl.question("Ingrese el segundo gasto del mes:$",(gasto2)=>{
        gastos[1]=parseFloat(gasto2);

        rl.question("Ingrese el tercer gasto del mes:$",(gasto3)=>{
            gastos[2]=parseFloat(gasto3);

            let total = gastos[0] + gastos[1] + gastos[2]

            console.log(`Gastos del mes: ${gastos}`)
            console.log(`Total:$${total}`)

            rl.close()
        })
    })
})