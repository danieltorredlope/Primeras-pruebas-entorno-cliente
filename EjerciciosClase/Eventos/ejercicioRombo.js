let fila;
let columna;

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
}