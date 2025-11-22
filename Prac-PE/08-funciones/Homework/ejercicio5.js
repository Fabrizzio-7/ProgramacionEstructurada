/* Ejercicio 5: Scope y Closures
Crea una función crearContador que retorne un objeto con métodos para incrementar,
decrementar y obtener el valor actual de un contador. El valor del contador debe ser
privado (no accesible directamente desde fuera). Demuestra cómo múltiples contadores
pueden mantener sus propios valores independientes usando closures */

function crearContador() {
    let contador = 0; 

    return {
        incrementar: () => contador++,
        decrementar: () => contador--,
        obtenerValor: () => contador
    };
}

const contador1 = crearContador(),
    contador2 = crearContador();

contador1.incrementar();
contador1.incrementar();
contador2.incrementar();

console.log("Contador 1:", contadorA.obtenerValor());
console.log("Contador 2:", contadorB.obtenerValor()); 