let computadora = {
    marca: "msi",
    modelo: "thin 15 b15cu",
    especificaciones: {
        procesador: "i5 13Gen",
        ram: "8 GB",
        almacenamiento: "1Tb"
    }
}

computadora.especificaciones.ram = "16GB"
computadora.especificaciones.sistemaOperativo = "Windows 11"
delete computadora.especificaciones.almacenamiento

console.log("Las especificacione son",computadora)