//Ejemplo de if

function nota(a){
    return a;
}

let calificacion = nota(3);
let aprobado = "Estás aprobado";
let suspenso = "Estás suspenso";
let suficiente = "Tienes un suficiente";
let bien = "Tienes un bien";
let notable = "Tienes un notable";
let sobresaliente = "Tienes un sobresaliente";
let noValida = "Nota no válida";

/*
if (calificacion >= 1 && calificacion <= 10){
    if (calificacion >= 5 && calificacion <= 10) {
        alert(aprobado);
        if (calificacion == 5){
            alert(suficiente);
        } else if (calificacion == 6){
            alert(bien);
        } else if (calificacion >= 7 && calificacion <= 8){
            alert(notable);
        } else if (calificacion >= 10 && calificacion <= 9){
            alert(sobresaliente);
        } else{
            alert(suspenso);
        }
    }
    
} else {
    alert(noValida);
}
*/

//Realizamos el mismo ejercicio que arriba, pero en este caso utilizando switch
switch (calificacion) {
    case 1,2,3,4: //no funciona
        alert(suspenso);
        break;
    case 5:
        alert(suficiente);
        break;
    case 6:
        alert(bien);
        break;
    case 7, 8:
        alert(notable);
        break;
    case 9, 10:
        alert(sobresaliente);
        break;
    default:
        alert(noValida)
        break;
}
