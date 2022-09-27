//Ejemplo for
var i;

for (i=1; i<=5; i++){
    alert("i = "+i);
}

//Variaciones
//Si se omite la primera sentencia de la variable debe haber sido inicializada anteriormente.
var j = 1;
for(; j<=5;j++){
    alert("j = "+j);
}

//Si se omite la segunda sentencia, dentro del código a repetir hay que incluir una instrucción break.
var k;
for(k=1; ;k++){
    alert("k = "+k);
    if (k==5){
        break;
    }
}

//Si se omite la tercera sentencia, se debe incrementar o decrementar el valor de la variable dentro del bucle.
var l;
for (l=1;l<=5;){
    alert("l = "+l);
    l++;
}

