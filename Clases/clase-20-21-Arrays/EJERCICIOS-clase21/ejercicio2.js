import readline from 'readline'

const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numeros=[]

rl.question("Ingrese la primera nota:",(nota1)=>{
    numeros[0]=parseInt(nota1);

    rl.question("Ingrese la segunda nota:",(nota2)=>{
        numeros[1]=parseInt(nota2);

        rl.question("Ingrese la trecer nota:",(nota3)=>{
            numeros[2]=parseInt(nota3);

            let promedio= (numeros[0] + numeros[1] + numeros[2]) / 3;
            console.log(`El promedio es: ${promedio}`);

            rl.close();
        })
    })
})