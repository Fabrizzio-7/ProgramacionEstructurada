import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
//Ejercicio 1
/* rl.question("Ingrese su nombre completo: ",(nombre)=>{
    const nombreLimpio = nombre.trim();
    const nombreSinEspacios = nombre.replaceAll(" ","");
    const numCaract = nombreSinEspacios.length();

    console.log(`Nombre limpio: ${nombreLimpio}`);
    console.log(`Nombre sin espacios: ${nombreSinEspacios}`);
    console.log(`Cantidad de caracteres sin espacio: ${numCaract}`);

    rl.close();
}) */
//Ejercicio 2

/*     rl.question("Ingrese su correo:", (correo)=>{
        const correoNormalizado = correo.toLowerCase();
        const dominValido = correo.includes("@gmail.com");
        
        console.log(`Correo normalizado: ${correoNormalizado}`);
        console.log(`dominio @gmail valido: ${dominValido}`);

        rl.close();
    }) */

//Ejercicio 3

/* rl.question("Ingrese un codigo generado:", (codigo)=>{
    const ultimosDigitos = codigo.slice(-4);
    console.log(`Los ultimos 4 digitos son: ${ultimosDigitos}`)
    rl.close();
}) */

// Ejercicio 4

/* rl.question("Ingrese el mensaje:", (mensaje)=>{
    const indiceError = mensaje.indexOf('error');
    console.log(` El índice de la primera ocurrencia de  'error' es: ${indiceError}`);
    rl.close();
}) */
