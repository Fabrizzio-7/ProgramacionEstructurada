import readline from 'readline'

const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
})

const nombres = [Chepe, Alejandro, Axel]

function existe (nombre){
    if (nombres.includes(nombre)){
        return `${nombre} si esta en la lista`;
    }else{
        return `${nombre} no esta en la lista`
    }
}

rl.question("Ingrese un nombre par verificar si se encuentra en la base de datos", (nom) =>{
    let resultado = existe(nom)
    console.log(resultado)
    rl.close()
})