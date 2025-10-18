import readline from 'readline'

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function saludar(nombre){
    console.log(`Hola ${nombre}, Bienbenido a JavaScript`)
}

let resta =(n1,n2)=>{
    let res = n1 - n2
    return res;
}

rl.question("Ingrese su nombre para saludarlo: ", (nom)=>{
    rl.question("Ingrese el primer numero:", (num1)=> {
        rl.question("Ingrese el segundo numero:", (num2)=>{
            
            saludar(nom);
            console.log(`La resta de ambos numneros es: `, resta(num1,num2));
            rl.close();
        })

    })
})