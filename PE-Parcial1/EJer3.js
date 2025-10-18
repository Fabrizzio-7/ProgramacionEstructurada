let vehiculo = {
    marca:"Toyota",
    año:"2018",
    seguro:{
        compania:"Segumax",
        numeroPoliza:"28112007",
        vigente: true
    }
}

vehiculo.seguro.compania = "Tosegu"
vehiculo.seguro.fechaVencimiento =  "2026-05-10"
delete vehiculo.seguro.vigente

console.log("===VEHICULOS ASEGURADOS===", vehiculo)