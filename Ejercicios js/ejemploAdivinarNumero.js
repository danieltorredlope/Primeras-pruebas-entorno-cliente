let numAdivinar = Math.floor(Math.random()*100);
console.log(numAdivinar);
let numero = Number(prompt("Dime un número"));


while (numero != numAdivinar) {
        alert("Número incorrecto");
        if (numero < numAdivinar){
            alert("El número es menor que el número introducido");
        } else if (numero > numAdivinar){
            alert("El número es mayor que el número introducido");
        }
        let numero2 = Number(prompt("Dime otro número"));
        numero = numero2;
}

if (numero == numAdivinar) {
    alert("¡Has adivinado el número!");
}