import readline from 'readline'

const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let datos = []

rl.question("Ingrese su sueldo base: $", (dato1)=>{
    datos[0]=parseFloat(dato1);

    rl.question("Ingres su bono recibido: $", (dato2)=>{
        datos[1]=parseFloat(dato2);

        rl.question("ingrese su descuento por seguro: $", (dato3)=>{
            datos[2]=parseFloat(dato3);

            let salFinal = datos[0] + datos[1] - datos[2]
            
            console.log(`El sueldo es: $${datos[0]}`)
            console.log(`El bone es de: $${datos[1]}`)
            console.log(`El descuento por seguro es de: $${datos[2]}`)
            console.log(`El salario Final es: $${salFinal}`)
        })
    })

})