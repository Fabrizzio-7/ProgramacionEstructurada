
import readline from 'readline'
import { stdin, stdout } from 'process'

const rl = readline.createInterface({
    input: stdin,
    output: stdout
})

const numeros = [],

    pedirNumero = () => {
        rl.question('Ingresa un número o presiona enter para terminar: ', (num) => {
            if (num == '') {
                rl.close()
                const total = numeros.reduce((acumulador, currentValue) => {
                    return acumulador += currentValue;
                }, 0);
                console.log(`La suma total del array es ${total}`);
                
            } else if (isNaN(num*1)) {
                console.log(`${num} no es no número intente de nuevo `);
                pedirNumero();
            } else {
                numeros.push(num*1);
                pedirNumero()
            }
        })
    }

pedirNumero()