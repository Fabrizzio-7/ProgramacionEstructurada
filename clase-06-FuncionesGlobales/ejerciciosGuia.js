import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("primera nota: ", (nota1) =>{
    rl.question("Segunda nota: ", (nota2) =>{
        rl.question("Tercera nota: ", (nota3) =>{
            const promedio = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3
            console.log(promedio);
            rl.close();
        });
    });
}), 

rl.question("Inserta kilometros: ", (km) =>{
    const millas = (parseFloat(km) * 0.621371).toFixed(2)
    console.log(millas);
    rl.close();
}); 

rl.question("precio unitario del producto: ", (precioU)=>{
    rl.question("Cantidad del producto: ", (unidades)=> {
        const total = parseFloat(precioU) * parseInt(unidades);
        console.log(total);
    });
});

