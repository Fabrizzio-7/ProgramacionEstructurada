import readline from 'readline'

const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
})

const frutas=['manzanas', 'banana', 'naranja', 'fresas']

function precioFrutas (fruta){
    let precio;

    switch(fruta.toLowerCase){
        case 'manzana':
            precio=0.75;
            break;
        case 'naranja':
            precio=0.80;
            break;
        case 'banana':
            precio=0.30;
            break
        case 'fresas':
            precio=0.90;
            break
        
    }
}

rl.question('Ingrese el nombre de una fruta: ',(fruta)=>{
    const precio= precioFrutas(fruta);

    if (frutas.includes(fruta.toLowerCase())){
        
    }
})