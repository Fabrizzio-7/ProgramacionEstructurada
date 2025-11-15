/* 2-	Crea una función que muestre un saludo según la hora del día en que se encuentre.
•	6 a 11:00am : Buenos días
•	12 a 17 pm : Buenas tardes
•	18 a 23 pm: Buenas noches
•	0 a 5: a dormir
 */

function saludoPorHora(hora) {
    switch (true) {
        case (hora >= 6 && hora <= 11):
            console.log("Buenos días");
            break;

        case (hora >= 12 && hora <= 17):
            console.log("Buenas tardes");
            break;

        case (hora >= 18 && hora <= 23):
            console.log("Buenas noches");
            break;

        case (hora >= 0 && hora <= 5):
            console.log("A dormir");
            break

        default:
            console.log("Hora inválida")
    }
}

saludoPorHora(9)
saludoPorHora(14)
saludoPorHora(20)
saludoPorHora(3)