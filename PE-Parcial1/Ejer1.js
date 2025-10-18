let salarioIni = 1380.58
aumento = salarioIni * 0.15 
salarioFin =salarioIni + aumento

let fichaEmpleados = {
    nombreCompleto:"ANA LUCIA RODRIGUEZ",
    edad:"28 años",
    salario:("$" + salarioFin ) ,
    activo: true,
    fechaIngreso:"2025",
    habilididades:"(3) excel, Contabilidad, analisis"

}
fichaEmpleados.departamento = "contabilidad"
delete fichaEmpleados.activo


console.log( "=== FICHA DE EMPLEADOS ===", fichaEmpleados)