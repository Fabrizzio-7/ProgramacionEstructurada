/* Ejercicio 3: Funciones como argumentos (Higher-order functions)
Implementa una función llamada procesarArray que reciba un array de números y una
función como parámetros. Esta función debe aplicar la función recibida a cada elemento
del array. Crea diferentes funciones de procesamiento (duplicar, elevar al cuadrado,
calcular la raíz cuadrada) y demuestra cómo procesarArray puede usar cada una de ellas. */

const array = [1,2,3,4]

function procesarArray (arrNum, func) {
    const res = [];

    for (let i = 0; i < arrNum.length; i++) {
        res.push(func(arrNum[i]));
    }
    return res;
}

//Funcion que duplica
const duplicar = (num) => num * 2

console.log(procesarArray(array,duplicar))

//funcion de elevar al cuadrado
const alCuadrado = (num) => num * num

console.log(procesarArray(array,alCuadrado))

//Funcion calcular la raíz cuadrada
const raizCuadrada = (num) => Math.sqrt(num)


console.log(procesarArray(array,raizCuadrada))