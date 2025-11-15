// ``Ejercicio 1: Declaración y llamada de funciones básicas
// Implementa una función formatearSaludo que reciba dos parámetros: un
// objeto persona con propiedades nombre, edad y una cadena horaDelDia (por ejemplo,
// "mañana", "tarde", "noche"). Retorna el saludo personalizado considerando la edad (usa
// una variante formal para mayores de edad) y ajusta el mensaje según la hora del día.
// Luego, crea otra función calcularArea que reciba el radio de un círculo y retorne su área.
// Demuestra el uso de ambas funciones con diferentes valores de entrada y muestra los
// resultados por consola.

//función formatearSaludo

function formatearSaludo(persona, horaDelDia) {
    const { nombre, edad } = persona;
    let saludoBase = "";
    let mensajeHora = "";

switch (horaDelDia.toLowerCase()) {
    case "mañana":
        mensajeHora = "¡Buenos días";
    break;
    case "tarde":
        mensajeHora = "¡Buenas tardes";
    break;
    case "noche":
        mensajeHora = "¡Buenas noches";
    break;
    default:
        mensajeHora = "¡Hola";
}

if (edad >= 18) {
    saludoBase = `${mensajeHora}, señor(a) ${nombre}. Espero que esté teniendo un buen dia.`;
} else {
    saludoBase = `${mensajeHora}, ${nombre}! ¿Cómo estás?`;
}

return saludoBase;
}

//función calcularArea

let calcularArea = (area) =>{
    const res = Math.PI * (area*area);
    return res.toFixed(2);
}
console.log(formatearSaludo({ nombre: "Carlos", edad: 20 }, "mañana"));
console.log(formatearSaludo({ nombre: "María", edad: 30 }, "noche"));
console.log(calcularArea(3));
console.log(calcularArea(7));