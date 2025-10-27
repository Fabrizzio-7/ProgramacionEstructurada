import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Ingrese un numero decimal : eje=> 7.85', (decimal) => {
    const floor = Math.floor(decimal);
    console.log('El numero usando floor es :', floor);
    console.log ('El numero usando ceil es :', Math.ceil(decimal));
    console.log ('El numero usando round es :', Math.round(decimal));
    console.log ('El numero usando trunc es :', Math.trunc(decimal));

    
    rl.close();
});