const square = (num) => num*num

const res = square(2)
console.log(res);

/* function mapDef(arr, callback) {
    let res = []
    for (let index = 0 ; index < arr.length; index++) {
        res[index] = callback(arr[index]);
    }
    console.log({ res });
    return res;

    //return callback(arr)
}
let arr = [1, 2, 3]
const squares = mapDef(Arr, square)
mapDef([1,2,3], (square(index)));
 */

//Factorial
// n : cualquier cosa numero
function factorial (n) {
    console.log("recibido", n)
    if(n === 0 || n === 1){
        return 1
    }else{
        console.log("resolviendo :", n)
        return n * factorial(n - 1)
    }  
}

console.log(factorial(17))

