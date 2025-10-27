//callback functon
let numeros = [2,4,6,7,9]
function recorrerArray(arr, callback){
    for(const item of arr){
        callback(item)
    }
}
recorrerArray(numeros, n => console.log(n*n));

function procesarUsuario(nombre, callback){
    console.log(`procesando usuario: ${nombre}, espere...`)
    callback(nombre)
}

procesarUsuario("kevin", function(nombre){
    console.log("Ya esta siendo procesado", nombre)
})

//FUNCIONES
const sumar = (a,b) => a+b 
const saludo = () => "hola mundo"
console.log(sumar(40,50))
console.log(saludo())

const pares = [2,4,6,8]
const exponentes = pares.map(x => x * x)
console.log("Array normal", pares)
console.log("Elevado asi mismo", exponentes)