let nombreCliente = prompt("Dígame su nombre, por favor");
alert(typeof (nombreCliente));

//1. comprobamos que el nombre del cliente sea un string y que no sea nulo, si no es así insistimos
while ((typeof (nombreCliente) == String) != true || typeof (nombreCliente) == null) {
    let nuevoNombreCliente = prompt("Ha indicado un valor erróneo para el campo nombre, vuelva a intentarlo, por favor");
    nombreCliente = nuevoNombreCliente;
    alert(nombreCliente);

    if ((typeof (nombreCliente) == String) == false) {
        break;
    }
}

//1. comprobamos que la edad del cliente sea un numero y que no sea nulo, si no es así insistimos
let edadCliente = parseInt(prompt("Dígame su edad, por favor"));
alert(typeof (edadCliente));

while ((typeof(edadCliente) == Number) == true || typeof(edadCliente) == null) {
    let nuevaEdadCliente = parseInt(prompt("Ha indicado un valor erróneo para el campo edad, vuelva a intentarlo, por favor"));
    edadCliente = nuevaEdadCliente;
    alert(edadCliente);

    if ((typeof (edadCliente) == Number) == false) {
        break;
    }
}

let peliculas = ["Spider Man","Superman","Dragon Ball Super","La era del hielo","18videos"];
alert("Las peliculas disponibles son "+peliculas);
peliculaCliente = prompt("¿Que película desea ver?");

 let peliculaEncontrada;

 if (edadCliente <= 17 && peliculaCliente == "18videos") {
    while (peliculaCliente == "18videos") {
        peliculaCliente = prompt("No tiene edad suficiente para ver esa película, por favor seleccione otra");
        alert(peliculaCliente);
    }
 }
for(i=0;i<peliculas.length;i++){
    if (peliculaCliente === peliculas[i]) {
        peliculaEncontrada = true;
    }
}

if (peliculaEncontrada == true) {
    alert("La pelicula "+peliculaCliente+" se encuentra en el catálogo");
} else {
    alert("La pelicula "+peliculaCliente+" no se encuentra en el catálogo");
}


let comidaCliente;
let descuentoCliente;

if (edadCliente <= 17) {
    comidaCliente = "caramelos y refresco";
    descuentoCliente = "Descuento del 50%";
} 

if (edadCliente >= 18 && edadCliente <= 25) {
    comidaCliente = "Palomitas, perrito y refresco";
    descuentoCliente = "No hay descuento";
} 

if (edadCliente >= 26 && edadCliente <= 35) {
    comidaCliente = "Perrito y refresco";
    descuentoCliente = "Descuento del 10%";
}

if(edadCliente >= 36){
    comidaCliente = "Agua";
    descuentoCliente = "Descuento del 20%";
}

console.log("Nombre: "+nombreCliente);
console.log("Edad: "+edadCliente);
console.log("Película"+peliculaCliente);
console.log("Comida: "+comidaCliente);
console.log("Descuento: "+descuentoCliente);