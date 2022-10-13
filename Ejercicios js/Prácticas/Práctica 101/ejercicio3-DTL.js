//Práctica101_ejercicio3

/*
Define una variable saludo=”Hola” como variable local dentro de una función saludar()
que muestre una ventana emergente con el valor de la variable saludo
    Invoca la función
    Muestra la variable desde fuera de la función mediante un window.alert
*/
function saludar() {
var saludo = "Hola";
alert(saludo);

}

saludar();
//window.alert(saludo);


/*
Define una variable global despedida=”Adiós” fuera de una función despedir( ) que muestre
una ventana emergente con el valor de la variable despedida.
    Invoca la función
    Muestra la variable desde fuera de la función

*/

var despedida="Adiós";

function despedir() {
    alert(despedida);
}

despedir();
window.alert(despedida);

/*
Define dos variables con el mismo nombre y distinto valor: una fuera y otra dentro de una función
ámbito() que muestre un window.alert de la misma. Muestra el valor de las dos mediante window.alert e invocando a la función.
*/

var numero=1;

function ambito() {
    var numero=2;
    window.alert(numero);
}

window.alert(numero);
ambito();


/*
Declara y define una variable global. Redefínela dentro de una función que la muestre mediante un window.alert.
Muestra el valor de la variable mediante window.alert e invocando a la función.
*/

var global="valor fuera de funcion";

function redefinir() {
    global = "valor dentro de funcion";
    window.alert(global);
}

window.alert(global);
redefinir();
