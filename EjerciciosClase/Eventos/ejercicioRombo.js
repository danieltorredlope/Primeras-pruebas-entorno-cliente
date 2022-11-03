let caja = document.getElementById("caja");

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

/*
for(fila=1; fila<=8; fila=fila+2){
    
    for (columna = 1; columna <= 8-fila; columna++) {
         document.write("&nbsp");    
    }
    for (columna = 1; columna <= fila; columna++) {
        document.write('*');
    }
    document.write("<br>")
}

for(fila=5; fila>=1; fila=fila-2){
    
    for (columna = 1; columna <= 8-fila; columna++) {
         document.write("&nbsp");    
    }
    for (columna = fila; columna >= 1; columna--) {
        document.write('*');
    }
    document.write("<br>")
} */
