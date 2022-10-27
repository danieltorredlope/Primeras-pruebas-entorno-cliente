/*
Trata de organizar el código de tu programa (¿quitando switch?) usando funciones.
 Define y llama a tres funciones en los lugares apropiados:

⦁	showContact: la función debe tomar dos argumentos; el primero es la lista de contactos y
    el segundo es el número de índice del contacto a mostrar; dentro de la función,
    verifica si se pasan los argumentos correctos, es decir, si los contactos son un array
   (utiliza la construcción instanceofArray para esto).

⦁	showAllContacts: la función debe tomar un argumento, la lista de contactos; dentro de la función,
     verifica si el argumento dado es un array.

⦁	addNewContact: la función debe tomar cuatro argumentos, una lista de contactos
    y los datos del nuevo contacto, es decir: nombre, teléfono y número; antes de agregar
    un nuevo contacto, verifica si el argumento pasado es un array y si los datos del nuevo contacto tienen algún valor.
*/

let listaContactos = [
    {
        nombre: 'Maxwell Wright',
        telefono: '(0191) 719 6495',
        correo: 'Curabitur.egestas.nunc@nonummyac.co.uk'
    },

    {
        nombre: 'Raja Villareal',
        telefono: '0866 398 2895',
        correo: 'posuere.vulputate@sed.com'
    },

    {
        nombre: 'Helen Richards',
        telefono: '0800 1111',
        correo: 'libero@convallis.edu'
    },
];

let listaOpciones = [
    "1. Mostrar contacto\n"+
    "2. Mostrar todos los contactos\n"+
    "3. Añadir un nuevo contacto"
]

let nombreContacto ="";
let telefonoContacto ="";
let correoContacto ="";

function showContact(array, indice) {
    if ((array instanceof Array) == true && indice != null) {
        console.log(array[indice]);
    }
    
}

function showAllContacts(array) {
    if ((array instanceof Array)==true){
        console.log(array);
    }
}

function addNewContact(array, nombreNuevo, telefonoNuevo, correoNuevo){
    if((array instanceof Array)==true && (nombreNuevo != null && nombreNuevo != " ") && 
    (telefonoNuevo != null && telefonoNuevo != " ") && (correoNuevo != null && correoNuevo != " ")){

        listaContactos.push({
            nombre: nombreNuevo,
            telefono: telefonoNuevo,
            correo: correoNuevo
        })

        console.log(listaContactos);
    } else{
        alert("Alguno de los datos no es correcto, no se introduce el nuevo contacto");
    }

}


alert("Estas son las opciones disponibles:\n" + listaOpciones);
opcionUsuario = prompt ("¿Que opción eliges?");

if (opcionUsuario == '1') {
    posicionArray = prompt("¿Qué posición de contacto quieres visualizar?");
    showContact(listaContactos, posicionArray);

} else if (opcionUsuario == '2'){
    showAllContacts(listaContactos);

} else if (opcionUsuario == '3'){
    nombreContacto = prompt ("Introduzca el nombre del nuevo contacto");
    telefonoContacto = prompt("Introduzca el telefono del nuevo contacto");
    correoContacto = prompt("Introduzca el correo del nuevo contacto");

    addNewContact(listaContactos, nombreContacto, telefonoContacto, correoContacto);
}







