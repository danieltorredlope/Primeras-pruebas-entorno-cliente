/*
4.- Modifica el programa para que el usuario pueda elegir lo que quiere hacer con la lista. Las opciones serán:

⦁	Mostrar el primer contacto (primero)
⦁	Mostrar el último contacto (último)
⦁	Añadir un nuevo contacto (nuevo)
Al agregar un nuevo contacto, verifica si el usuario ha ingresado todos los datos necesarios. Si falta al menos 
uno de los tres valores (nombre, teléfono o correo electrónico), no se agrega el contacto.
*/
let array = [
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

//Añadimos una nueva posicion al array de objetos
array.push(
    {
        nombre: 'Maisie Haley',
        telefono: '0913 531 3030',
        correo: 'risus.Quisque@urna.ca'
    }
);

//Damos al usuario la opcion de elegir que accion quiere realizar
let opcionUsuario = prompt("Las opciones son 1: mostrar el primer contacto, 2: mostrar el segundo contacto, 3: añadir un nuevo contacto; selecciona una opcion por favor");

if (opcionUsuario != null){
    switch (opcionUsuario) {
        case 1:
            console.log(array[0]);//Mostramos la primera posición del array

            break;
    
        case 2:
            let ultimaPosicionArray = array.length-1;
            console.log(array[ultimaPosicionArray]);//Mostramos la última posición del array
            break;

        case 3:
            let nombre = prompt ("Introduzca el nombre del nuevo contacto");
            let telefono = prompt("Introduzca el telefono del nuevo contacto");
            let correo = prompt("Introduzca el correo del nuevo contacto");

            if (nombre == null || telefono == null || correo == null) {
                do {
                    
                } while (nombre == null || telefono == null || correo == null);
            }
            break;

        default:
            prompt("La opción seleccionada no es válida");
    }
} else {
    opcionUsuario = prompt("Opción no válida, por favor seleccione la 1, la 2 o la 3");
}
array.push({
    nombre: prompt("Introduce el nombre del nuevo contacto, por favor"),
    telefono: prompt("Introduce el teléfono del nuevo contacto, por favor"),
    correo: prompt("Introduce el correo del nuevo contacto, por favor")
}

);

console.log(array);


