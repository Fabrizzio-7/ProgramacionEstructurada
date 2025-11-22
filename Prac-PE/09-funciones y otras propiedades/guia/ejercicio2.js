function crearPerfil(nombre, edad = 17, ciudad = "San Miguel", profesion = "Estudiante") {
    if (!nombre) {
        throw new Error("El nombre es obligatorio");
    }

    return {
        nombre,
        edad,
        ciudad,
        profesion
    };
}

console.log(crearPerfil('Hugo'));