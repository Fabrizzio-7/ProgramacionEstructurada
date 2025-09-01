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

console.log(perfilUsuario.infoPersonal)
console.log(perfilUsuario.prefDeLaApp)
console.log(perfilUsuario.estadisticaDeUso)

perfilUsuario.prefDeLaApp.idioma= "Ingles"

perfilUsuario.estadisticaDeUso.ultimoAcceso = new Date()

delete perfilUsuario.prefDeLaApp.notificaciones

const {email} = perfilUsuario.infoPersonal
const {idioma} = perfilUsuario.prefDeLaApp

console.log(perfilUsuario)