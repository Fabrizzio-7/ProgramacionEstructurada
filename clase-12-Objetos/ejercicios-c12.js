// 1.Declara un objeto animal, con las propiedades raza, tamaño y color muestra el objeto en consola y luego imprime cada propiedad por separado. 
const animal = {
    raza: "Oso pardo",
    tamaño: 3.00,
    color: "Cafe"
    }

    console.log(animal);

    // 2.Al objeto animal agrega una nueva propiedad (la que desees) imprímela en consola y luego elimina la propiedad raza.

    animal.desplazamiento = "Terrestre";
    console.log(animal.desplazamiento);
    delete animal.raza

    // 3.Crea un objeto usuario con las propiedades usuario, email y rol, usa destructuring para crear variables con esas propiedades y mostrarlas en consola. 

    const user = {
        usuario: "Chepe",
        mail: "chepito331@gmail.com",
        rol: "conserje"
        }

        const {usuario,mail,rol} = user
        console.log(usuario)
        console.log(mail)
        console.log(rol)
    