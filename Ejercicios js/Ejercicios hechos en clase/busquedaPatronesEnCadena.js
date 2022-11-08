/*
Realiza una aplicación web que solicite una cadena de texto. El programa debe decir cuantas veces ocurre
cada uno de estos patrones sin distinguir mayúsculas y minúsculas: "00", "101","ABC", "H0". Un carácter 
puede formar parte de más de un patrón encontrado. Por ejemplo:

En la cadena "000" el patron "00" aparece dos veces (una empieza en la posicion 0 y otra empieza en la posicion 1).

Internamente el programa realizará la cuenta de patrones con una función definida como function numeroPatrones(texto)
que devolverá un numero entero con el número de patrones encontrados
*/

let cadena = prompt("Introduce una cadena"); //Pedimos al usuario introducir la cadena donde buscaremos los patrones.

/*
//Declaramos los patrones que buscaremos en la cadena
let patron00 = "/00\/g";
let patron101 = "101";
let patronABC = "ABC";
let patronHO = "HO";

//Declaramos el contador que aumentará en caso de encontrar un patron.
let contador = 0;

function numeroPatrones(cadena, patron){
    //Utilizamos toUpperCase() para que encuentre los patrones sin distinguir entre mayusculas y minusculas.
    cadena = cadena.toUpperCase();
    patron = patron.toUpperCase();

    cadena=cadena.matchAll(patron);
    for (let c of cadena) {
        contador++;
        console.log(cadena[c]);
        
    }
    
}

numeroPatrones(cadena, patron00);
//numeroPatrones(cadena, patron101);
//numeroPatrones(cadena, patronABC);
//numeroPatrones(cadena, patronHO);
*/

function buscarPatron(cadena, patron){
    //Importante declarar la i por el ambito de variables (que no la coja del general
    let i;
    //Contador de cuantos hemos encontrados
    let encontrado = 0;

    //Pasamos todo a mayusculas para no distinguir mayusculas de minusculas
    cadena = cadena.toUpperCase();
    patron = patron.toUpperCase();

    for(i=0; i < cadena.length; i++){
        //Sacamos la cadena desde la i a i + el tamaño del patron
        let string = cadena.substring(i, i+patron.length);

        if(string === patron) {
            //Encontrado coincidencia
            encontrados++
        }
    }
    return encontrados;
}

function main() {
    let patronesABuscar = ["00", "101", "ABC", "HO"];
    let i;

    //Total coincidencias de todos los patrones
    let total=0;
    //Recorremos el vector patronesABuscar

    for(i=0; i < patronesABuscar.length; i++){
        let res = buscarPatron(cadena, patronesABuscar[i]);
        alert("El patron " + patronesABuscar[i] + " esta " + res + " veces");
        //acumulamos el total
        total += res;
        
    }
}

main();

