//Función sin parámetros
function saludo(){
    alert("Hola!");
}

//Los paréntesis () invocan a la funcion
// si el resultado se guarda en una variable
let resultado_saludo = saludo();
alert(resultado_saludo);

//Aparece un segundo mensaje con undefined porque la funcion no devuelve nada

//Sin parentesis se puede guardar todo el código de la función en una variable

let resultado_saludo2 = saludo;
alert(resultado_saludo2);

//Funcion con parámetros
function producto(a,b){
    let c = a + b;
    return c; //guardamos el valor de la suma de a+b en la variable c y lo devolvemos
}

//Los paréntesis () invocan la funcion

let resultado_producto = producto(3,4);
alert(resultado_producto);

//Podemos introducir en el alert directamente la funcion 
alert(producto(5,6));

//Sin paréntesis se puede guardar la función en una variable o mostrar
alert(producto);

//función anónima
let producto2 = function(a,b){return a*b;};
let resultado2 = producto2(4,5);
alert(resultado2);

//Otra forma de definir una funcion
let jjFuncion = new Function ("a", "b", "return a*b;");
let resultado3 = jjFuncion(5,7);
alert(resultado3);

//Ejemplo de funcionamiento de funcion siendo llamada sin utilizar 1 de los parámetros

function suma(a,b){
    if (b===undefined) {
        b=10;
    }
    return a+b;
}

var resultado = suma(5);
alert(resultado);