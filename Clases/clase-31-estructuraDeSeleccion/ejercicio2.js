import readline from 'readline'

const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
})

let mensaje;

rl.question("Ingrese un numero para verificar si es positivo o negativo: ", (num) =>{
    if(num < 0){
        mensaje = 'El numero es negativo';
    }else{
        mensaje = 'El numero es positivo'
    }

    console.log(mensaje)

    rl.close()
}) 