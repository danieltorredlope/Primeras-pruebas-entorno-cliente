/* Posibles valores de typeof:
    "undefined"
    "object"
    "boolean"
    "number"
    "bigint"
    "string"
    "symbol"
    "function"
*/

let anno = 2022;
let nuevoAnno = anno = 2023;

console.log(nuevoAnno);
console.log(anno);

//Ejemplos tipos de datos

let altura;
console.log(altura);//undefined
//console.log(peso);//Uncaught ReferenceError: peso is not defined

let someResource;
console.log(someResource);//undefined
console.log(typeof someResource);//undefined
someResource = null;
console.log(someResource);//null
console.log(typeof someResource);//object
