/* Ejercicio 8. Cree un programa que solicite al usuario su salario base, el número de horas extras
trabajadas y el valor de una hora de trabajo normal. Luego, calcule el salario total,
considerando que cada hora extra se paga 1.5 del valor de la hora normal. Mostrar el
resultado en la consola.  */

function salarioTotal(salario,horasEx,horasBase){
    const dineroExtra = parseFloat(horasBase) * 1.5
    const pagoExtra = parseFloat(horasEx) * dineroExtra
    const total = parseFloat(salario) + pagoExtra
    return total
}

rl.question("Ingrese su salario base: ", (salario)=>{
    rl.question("Ingrese la cantidad de horas extra que ha trabajado: ", (horasEx)=>{
        rl.question("Ingrese el pago que recibe por hora de trabajo normal: ",(horasBase)=>{
            console.log(`Salario base: $${salario} \nHoras extra trabajadas: ${horasEx} \nPago por hora de trabajo normal: $${horasBase}`)
            console.log(`Su salario total es de: ${salarioTotal(salario,horasEx,horasBase)}`)
        rl.close()
        });
    });
});         