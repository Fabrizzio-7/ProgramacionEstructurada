const estudiante ={
    nombre:"Juan",
    apellido:"Crez",
    edad:"27 años",
    direccion:{
        pais:"El Salvador",
        calle:"Los almendros",
        numCasa:27
    }
}

//Acceso al objeto
console.log(estudiante);
console.log(estudiante.direccion);

console.log(estudiante["direccion"]);

//Agregamos nueva propiedad al objeto
estudiante.colorOjos="azules";
estudiante.direccion.postal=503;

console.log(estudiante.direccion);

//Modificamos propiedad
estudiante.direccion.numCasa=20;
console.log(estudiante.direccion);


//eliminando propiedades del objeto anidado
delete estudiante.direccion.numCasa
console.log(estudiante.direccion)