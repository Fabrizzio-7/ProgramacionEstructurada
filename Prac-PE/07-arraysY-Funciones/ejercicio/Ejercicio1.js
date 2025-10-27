
import readline from 'readline'
import { stdin, stdout } from 'process'

const rl = readline.createInterface({
    input: stdin,
    output: stdout
})

let arreglo = [],
    cantidad,
    contador = 0;

rl.question("Ingrese la cantidad de elementos del array: ", (num) => {
    cantidad = parseInt(num);

    const pedirValor = () => {
        if (contador < cantidad) {
            rl.question(`Ingrese el valor para la posición ${contador}: `, (valor) => {
                arreglo.push(valor);
                contador++;
                pedirValor();
            });
        } else {
            console.log("El arreglo ingresado es:", arreglo);
            rl.close();
        }
    };

    pedirValor();
});