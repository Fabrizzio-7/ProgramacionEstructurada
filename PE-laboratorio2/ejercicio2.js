//un conducto anota los litros de que gasta en tres viajes. Calcula el promedio de consumo total, imprimir el 
// promedio de consumo.

import readline from 'readline'

const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let consumo = []

rl.question("Ingrese la primera cantidad en litros: L",(consumo1)=>{
    consumo[0]=parseFloat(consumo1);

    rl.question("Ingrese la segunda cantidad en litros: L",(consumo2)=>{
        consumo[1]=parseFloat(consumo2);

        rl.question("Ingrese la tercera cantidad en litros: L",(consumo3)=>{
            consumo[2]=parseFloat(consumo3);

            let total = (consumo[0] + consumo[1] + consumo[2]) / 3

            console.log(`El promedio de consumo en litros es: L ${total}`)

            rl.close()
        })
    })
})
