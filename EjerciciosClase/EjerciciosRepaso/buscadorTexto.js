let cadena = prompt("Introduce el texto a buscar");
let texto = document.getElementById("parrafo");
let opcionPalabrasCompletas = prompt("¿Quieres buscar solo palabras completas?");
let opcionDistinguirMayus = prompt("Quieres distinguir mayusculas de minisculas?");

function buscarTexto(cadena, texto, opcionPalabrasCompletas, opcionDistinguirMayus) {
    if (opcionDistinguirMayus == true) {
        
    }else{
        cadena.toUpperCase();
        texto.toUpperCase();

        for (i=0; i < texto.length; i++){
            let string = texto.substring(i, i+cadena.length);
            if (string === cadena) {
                //encontrado
            }
        }
    }

}

if (opcionPalabrasCompletas.toUpperCase() == 'SI') {
    opcionPalabrasCompletas = true;
}

if (opcionDistinguirMayus.toUpperCase() == 'SI') {
    opcionDistinguirMayus = true;
}

buscarTexto(cadena, opcionPalabrasCompletas, opcionDistinguirMayus);

