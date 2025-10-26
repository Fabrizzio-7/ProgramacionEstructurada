//Un sistema de gestion de pedidos recibe código de seguimiento en el formato: PED-2025-00045, se necesira extraer el año del pedido y el número de orden usando el metodo substring()
//Requisitos:
//1.Estraer el año del pedido (2025) y el numero de orden (00045) usando substring()

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Ingrese el código del pedido (ej: PED-2025-00045): ",(codigo)=>
{
    const año = codigo.substring(4,8);
    const numeroOrden = codigo.substring(9);

    console.log(`Año del pedido: ${año}`);
    console.log(`Número de orden: ${numeroOrden}`);

    rl.close();

    })


