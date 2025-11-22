/* Ejercicio 2: Expresiones de función y funciones anónimas
Define la misma función calcularCubo de dos maneras diferentes: como declaración de
función y como expresión de función asignada a una variable. Luego, crea una función que
reciba un array de números y use una función anónima como callback para transformar
cada elemento (por ejemplo, elevar al cuadrado). Muestra los resultados de ambos
enfoques. */

//Declaracion de funciones

function calcularCubo (num) {
    let square = num*num;
    return square;
}
//expresión de función asignada a una variable

let alCuadrado = function calcularCubo (num) {
    let square = num*num;
    return square;
}

//Función que recibe un array y un callback

function transformarArray(arr, callback) {
const resultado = [];

for (let i = 0; i < arr.length; i++) {
    resultado.push(callback(arr[i]));
}

return resultado;
}