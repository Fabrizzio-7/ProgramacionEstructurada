/* 3. Escriba un programa que solicite al usuario una palabra o cadena de texto, crea una
función que reciba como parámetro el texto y devuelva la cantidad de caracteres que
contiene.  */
import readline from 'readline'

const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

const contarCaracteres = (string) => string.length;

rl.question("ingrese una palabra o cadena de texto: ", (texto) =>{
    console.log(`esa palabra tiene ${contarCaracteres(texto)} caracteres`)

    rl.close()
});