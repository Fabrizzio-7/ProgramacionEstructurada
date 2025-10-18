import readline from 'readline'

const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let temperaturas=[]

rl.question("Ingrese la primera temperatura:",(temp1)=>{
    temperaturas[0]=parseInt(temp1);

    rl.question("Ingrese la segunda temperatura:",(temp2)=>{
        temperaturas[1]=parseInt(temp2);

        rl.question("Ingrese la trecer temperatura:",(temp3)=>{
            temperaturas[2]=parseInt(temp3);

            let max = Math.max(temperaturas[0],temperaturas[1],temperaturas[2]);
            console.log(`La temperatura mayor es ${max}`)

            rl.close();
        })
    })
})