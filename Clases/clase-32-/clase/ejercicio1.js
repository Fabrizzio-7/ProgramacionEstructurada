import readline from 'readline'

const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
})

rl.question('Ingrese un numero del 1- 3: ', (num)=>{
    let numero = Number(num);

    switch(numero){
        case 1:
            console.log('numero uno')
            break;
        case 2:
            console.log('Numero dos')
            break;
        case 3:
            console.log('Numro tres');
            break;
    }
})