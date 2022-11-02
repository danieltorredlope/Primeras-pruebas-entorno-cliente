function alertar() {
    alert("Vamos a google");
}

function preguntar() {
    return confirm("¿Deseas ir a google?")
}

document.getElementById("tradicional").onclick=cambiar; //Sin paréntesis
//Con esta funcion cambiar modificaremos el texto por el indicado en la funcion.
function cambiar() {
    //alert("entramos en cambiar");
    document.getElementById("tradicional").innerHTML="Modelo de registro de eventos tradicional";
}

document.getElementById("w3c").addEventListener("click", color, false);
//de momento siempre false
//Con esta funcion cambiaremos el color de la fuente a rojo
function color() {
    document.getElementById("w3c").style.color="red";
}

function alPulsar() {
    let x=document.getElementById("miTexto");
    x.innerHTML="Has pulsado el boton";
}
document.getElementById("miBoton").addEventListener("click", alPulsar, false);
