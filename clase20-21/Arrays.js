const numeros = [10, 20 ,30,40, 50];

const meses = new Array ("enero", "febrero", "marzo");

const detodo = ["hola",10,null,true,{nombre:"juan",trabajo:"programador"},[1,2,3]];

console.log(detodo)

console.log(detodo[5][1])

//Modificamos los arreglos
numeros[1]=100;

meses.push("abril");//agrega al final
console.log(meses)

meses.pop(); //elimina el ultimo
console.log(meses);

meses.shift();
console.log(meses);

meses.unshift("enero");
console.log(meses)

for(i=0;i<meses.length;i++){
    console.log(meses[i])}

    //inicio de clase 21

numeros.splice(2,0,80);
console.log(numeros)

//Impeimir el primer y el ultmo día de la semana
const dias = ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"]
let primer = dias[0]
let ultimo = dias[dias.length -1]
console.log(ultimo)