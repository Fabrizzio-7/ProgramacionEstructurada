// Importar modulo
import readline from 'readline';

// Crear interfaz
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Preguntar al usuario
// rl.question('¿Como te llamas? ', (name) => {
//     console.log(Hola ${name}!);
//     rl.close();
// });
/* 
rl.question('¿Cuál es tu nombre? ', (name) => {
    rl.question('¿Cuál es tu apellido? ', (lastname) => {
        rl.question('¿Cuál es tu DUI? ', (DUI) => {
        console.log(`Hola ${name} ${lastname}! ${DUI}`);
        rl.close();
        });
    });
}); */

// **Ejercicios

// Ciudad - Usuario
rl.question('¿Dónde vives? ', (city) => {
    console.log(`Vives en ${city}!`);
    // Color Favorito
    rl.question('¿Cuál es tu color favorito? ', (color) => {
        console.log(`Tu color favorito es ${color}!`);
        // Dos Palabras
        rl.question('Dame una palabra: ', (word1) => {
            rl.question('Dame otra palabra: ', (word2) => {
                console.log(`${word1} ${word2}`);
                rl.close();
            });
        });
    });
});