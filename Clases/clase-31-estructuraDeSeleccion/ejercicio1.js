import readline from 'readline'

const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
})

const contraseña ="1234"
let mensaje;

rl.question("Ingrese su contraseña: ", (pass) => {
    if(contraseña === pass){
    mensaje = 'contraseña correcta';
    }else{
    mensaje= 'contraseña incorrecta'
    }
    console.log(mensaje);
    rl.close();
})