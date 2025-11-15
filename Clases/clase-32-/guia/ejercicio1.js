import { log } from 'console'
import readline from 'readline'

const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
})

console.log("==MENU DE OPERACIONES===");
console.log("1.sumar");
console.log("3.Restar");
console.log("3.Multiplicar");
console.log("4.Dividir");
console.log("5:Salir");

const sum = (n1,n2) => n1+n2
const resta = (n1,n2) => n1-n2
const multiplicar = (n1,n2) => n1*n2
const dividir = (n1,n2) => n1/n2

rl.question('Seleccione una poción (1-5): ', (option)=>{
    let opcion = Number(option);

    rl.question('Ingrese el primer número: ', (num1)=>{
        rl.question('Ingrese el segundo número: ', (num2)=>{
            const a = parseFloat(num1);
            const b = parseFloat(num2);
            let resultado = 0;

            switch(opcion){
                case 1:
                    console.log(sum(a,b));
                    break;
                case 2:
                    console.log(resta(a,b));
                    break;
                case 3:
                    console.log(multiplicar(a,b))
                    break;
                case 4:
                    console.log(dividir(a,b));
                    break;
                case 5:
                    break;
            }
        rl.close()
        })
    })
})



