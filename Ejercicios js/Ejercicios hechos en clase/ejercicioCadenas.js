var daw = "Desarrollo de aplicaciones web";
var dam = "Desarrollo de aplicaciones multiplataforma";
var asir = "Administración de 'Sistemas Informáticos' en red";
var smr = "Sistemas \"Microinformáticos\" y redes";

var ciclo = new String("");

ciclo += "Hay 3 ciclos formativos de grado superior\n";
ciclo += dam+", "+daw+" y "+asir;

alert(ciclo);
alert( "la lengitud de esta cadena es: " + ciclo.length);
alert("La cadena daw separa por espacios es: "+daw.split(" "));
alert("La cadena daw separa por espacios es: "+daw.split(" ", 2));