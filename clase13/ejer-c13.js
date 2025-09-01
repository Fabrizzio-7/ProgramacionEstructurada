//Ejercicio 1
const producto ={
    detalles:{
        nombre:"Laptop",
        precio:399.99,
        categoria:"tecnologia"
    },
    inventario:{
        stock: 17,
        proveedor:"Dell",
        ubicacion:"San Miguel"
    },
    Historial:{
        fechaIngreso:"27/1/25",
        ultimaventa:"25/8/25",
        ventasTotalea:"33"
    }
}

console.log(producto.detalles)

producto.inventario.stock += 50

producto.detalles.categoria = "electronica"

const {nombre,precio} = producto.detalles
console.log(nombre)
console.log(precio)

console.log(producto)

//Ejercicio 2

const perfilUsuario ={
    infoPersonal:{
        nombre:"Fabrizzio",
        edad:"17",
        email:"fabri@gmail.com"
    },
    prefDeLaApp:{
        idioma:"Español",
        notificaciones: false,
        tema: "oscuro"
    },
    estadisticaDeUso:{
        fechaDeRegistro:"20/1/25",
        ultimoAcceso: "27/08/25",
        numeroSesiones: 200
    }
}

console.log(perfilUsuario.infoPersonal);
console.log(perfilUsuario.prefDeLaApp);
console.log(perfilUsuario.estadisticaDeUso);

perfilUsuario.prefDeLaApp.idioma= "Ingles";

perfilUsuario.estadisticaDeUso.ultimoAcceso = new Date().toISOString().split("T")[0]; 

delete perfilUsuario.prefDeLaApp.notificaciones;

const {email} = perfilUsuario.infoPersonal;
const {idioma} = perfilUsuario.prefDeLaApp;

console.log(perfilUsuario);

//Ejecicico3
const libro = {
    informacion: {
        titulo: "Cien Años de Soledad",
        autor: "Gabriel García Márquez",
        genero: "Realismo mágico"
    },
    disponibilidad: {
        copias: 10,
        prestados: 4,
        ubicacion: "Estante B3"
    },
    registro: {
        fechaPublicacion: "1967-05-30",
        fechaIngreso: "2020-10-15",
        ultimaRevision: "2024-06-01"
    }
};

console.log(libro.informacion.autor);

const ejemplaresDisponibles = libro.disponibilidad.copias - libro.disponibilidad.prestados;
console.log(ejemplaresDisponibles);

libro.registro.ultimaRevision = new Date().toISOString().split("T")[0];


libro.informacion.genero = "Novela histórica";

const { titulo } = libro.informacion;
const { ubicacion } = libro.disponibilidad;

console.log(titulo);
console.log(ubicacion);

console.log(libro);