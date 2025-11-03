import readline from 'readline'

const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
})

let des;

//Creamos la funcion

function descuento(compra){

    if(compra >= 100){
        des= 0.10;
    }else if(compra >= 50 && compra <= 99){
        des =0.05;
    }else{
        des = 0
    }
    const total = compra-(compra*des)
    return total
}

rl.question("Ingrese el precio de su compra: ", (precio) =>{
    let compra = Number(precio)
    const totalpagar = descuento(compra)
    console.log(`Monto de la compra de : $${compra.toFixed(2)} el total a pagar con descuento es de : $${totalpagar.toFixed(2)} `)

    rl.close()
})