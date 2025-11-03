import readline from 'readline'

const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
})

function categorizar (edad) {
    if (edad >= 0 && edad <= 11){
        return `Su categoria es: niñez`
    }else if(edad >= 12 && edad <= 17){
        return `Su categoria es: Adolecencia`
    }else if (edad >= 18 && edad <= 59){
        return `Su categoria es: Adultez`
    }else if (edad >= 60 ){
        return `Su categoria es: Vejez`
    }else{
        return `La edad no es valida`
    }
}

rl.question("Ingrese su edad para categorizarla: ", (age) =>{
    let ed = Number(age)
    console.log(categorizar(ed))
    rl.close()
})