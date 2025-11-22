/* Ejercicio 4: Recursión
Implementa las siguientes funciones recursivas:
• Una función factorial que calcule el factorial de un número
• Una función fibonacci que calcule el n-ésimo número de la secuencia de Fibonacci
• Una función sumarDigitos que sume todos los dígitos de un número entero
Demuestra el funcionamiento de cada función con diferentes valores y explica el caso
base y el caso recursivo de cada una. */

//• Una función factorial que calcule el factorial de un número
function factorial (n) {
    console.log("recibido", n)
    if(n === 0 || n === 1){
        return 1
    }else{
        console.log("resolviendo :", n)
        return n * factorial(n - 1)
    }  
}
console.log("Factorial de 5 = ", factorial(5))
/* Caso base: n === 0 y n===1 retornan 1. Evita que la función se llame infinitamente */
/* Caso recursivo: n * factorial(n - 1) reduce el problema hasta llegar al caso base. */


//• Una función fibonacci que calcule el n-ésimo número de la secuencia de Fibonacci

function fibonacci (n) {
if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2); 
}

console.log("fibonacci de 6 = ", fibonacci(6)) 

/* Caso base: si n === 0  retorna 0 y si n === 1 retorna 1*/
/* Caso recursivo: fibonacci(n) = fibonacci(n - 1) + fibonacci(n - 2)
Cada llamada se divide en dos hasta llegar a los casos base. */




//• Una función sumarDigitos que sume todos los dígitos de un número entero

function sumarDigitos(numero) {
    const digitos = numero.toString().split('');
    let suma = 0;

    for (let i = 0; i < digitos.length; i++) {
    if (digitos[i] !== '-') {
        suma += parseInt(digitos[i]);
    }
}

return suma;
}
console.log('Suma de digitos de 12345 = ', sumarDigitos(12345)) 