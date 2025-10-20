//importar modulo
import readline from 'readline';

// crear la interfaz de lecturaa
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Realizamos la pregunta
rl.question("ingresar una frase: ", (frase)=>{
    console.log('\n === Tratamiento de cadenas ===');

    //1.Length
    const fraseLength = frase.length;
    console.log(`La longitud de la frase es: ${fraseLength}`);
})

    //2.toUpperCase
    const fraseMayus = frase.toUpperCase();
    console.log(`La frase en mayuscula es: ${fraseMayus}`);

    //3.toLowerCase
    const fraseMinus = frase.toLowerCase();
    console.log(`La frase en minuscula es: ${fraseMinus}`);

    //4.Trim
    const fraseTrim = frase.trim();
    console.log(`La frase sin espacios al inicio y al final es: ${fraseTrim}`);

    //5.substring
    const subCadena = frase.substring(0, 5);
    console.log(`Los primeros 5 caractere de la frase son: ${subCadena}`);

    //6.slice
    const subCadenaSlice = frase.slice(-5);
    console.log(`Los ultimos 5 caractere de la frase son: ${subCadenaSlice}`);

    //7. replace
    const fraseReemplazada = frase.replace('hola', 'adios');
    console.log(` La frase con 'hola' remplazado por 'adios'es: '${fraseReemplazada}'`);

    //8.replaceAll
    const fraseReemplazadaAll = frase.replaceAll('hola', 'adios');
    console.log(` La frase con todas las ocurrencias'hola' remplazado por 'adios' es: '${fraseReemplazadaAll}'`);

    // 9. split divide la frase en palabras separandolas por un espacio
    const palabras = frase.split(' ');
    console.log(`La frase dividida en palabras es: ${palabras}`);

    // 10. includes
    const incluyeHola = frase.includes('hola');
    console.log(` La frase incluye 'hola': ${incluyeHola}`);

    // 11. indexOf
    const indiceHola = frase.indexOf('hola');
    console.log(` El índice de la primera ocurrencia de  'hola' es: ${indiceHola}`);

    // 12.startswith
    const empiezaConHola = frase.startsWith('hola');
    console.log(`La frase termina con 'adios'`)

    // 13. endsWith
    const terminaConAdios = frase.endsWith('adios');
    console.log(` La frase termina con 'adios': ${terminaConAdios}`);

    rl.close();