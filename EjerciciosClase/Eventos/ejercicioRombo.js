/*let caja = document.getElementById("caja");

//creciente
limite = Number(prompt("Selecciona el limete de filas"));

for(let i = 0; i < limite; i++){
    let asterisco ="";
    let espacioHTML="";

    for(let k=0; k < limite; k++){
        espacioHTML+= "&nbsp&nbsp";
    }

    for(let j=1; j <= 2*i+1; j++){
        asterisco+= "*";
    }

    caja.innerHTML = caja.innerHTML + espacioHTML + asterisco + "<br>";
}

//decreciente

for(let i = limite-2; i >= 0; i--){
    let asterisco = "";
    let espacioHTML = "";

    for(let k=0; k < limite - i - 1; k++){
        espacioHTML+= "&nbsp&nbsp";
    }

    for(let j=1; j <= 2*i+1; j++){
        asterisco+= "*";
    }
    caja.innerHTML = caja.innerHTML + espacioHTML + asterisco + "<br>";
}
*/
/*
let limite = Number(prompt("Selecciona el limete de filas"));
let creciente = (limite/2)+1;
let decreciente = limite - creciente;

for(fila=1; fila<=limite; fila=fila+2){
    
    for (columna = 1; columna <= limite-fila; columna++) {
         document.write("&nbsp");    
    }
    for (columna = 1; columna <= fila; columna++) {
        document.write('*');
    }
    document.write("<br>")
}

for(fila=creciente; fila>=1; fila=fila-2){
    
    for (columna = 1; columna <= limite-fila; columna++) {
         document.write("&nbsp");    
    }
    for (columna = fila; columna >= 1; columna--) {
        document.write('*');
    }
    document.write("<br>")
} */

function pyramid(numPisos) {
    /* Espacios que se debe empujar el asterisco*/
    let spaces = numPisos - 1;
    
    /* Recorrer cada piso */
    for (let i = 0; i < numPisos; i++) {
      let piso = '';
      
      /* Agregar el número de espacios*/
      for (let j = 0; j < spaces; j++) {      
        piso += ' ';
      }
      
      /* Agregar el número de asteriscos */
      for (let k = 0; k <= i; k++) {      
        piso += '*';
      }
      
      /* Mostrar espacios y asteriscos por piso*/
      console.log(piso)
      
      /* El siguiente piso tendrá un espacio menos */
      spaces--;
    } 
  }
  
  pyramid(10);