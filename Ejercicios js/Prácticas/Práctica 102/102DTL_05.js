/*Encierra todo el programa en un bucle para que al usuario se le pregunte repetidamente qué quiere hacer. El usuario puede optar por:

⦁	Mostrar el primer contacto (primero)
⦁	Mostrar el último contacto (último)
⦁	Mostrar todos los contactos (todos)
⦁	Añadir un nuevo contacto (nuevo)
⦁	Salir del programa (salir)

Después de ejecutar la acción seleccionada, el programa le dará la oportunidad de elegir nuevamente.
El programa debe finalizar las acciones solo después de que el usuario dé un comando específico (salir).*/

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
    "1. Mostrar el primer contacto\n"+
    "2. Mostrar el último contacto\n"+
    "3. Mostrar todos los contactos\n"+
    "4. Añadir un nuevo contacto\n"+
    "5. Salir del programa"
]

alert(listaOpciones);
let opcionUsuario="";
do {
    opcionUsuario = prompt("Elige la opcion que desees");
    switch (opcionUsuario) {
        case '1':
            console.log(listaContactos[0]);//Mostramos la primera posición del array
            break;
        
        case '2':
            let ultimaPosicionArray = listaContactos.length-1;
            console.log(listaContactos[ultimaPosicionArray]);//Mostramos la última posición del array
            break;

        case '3':
            console.log(listaContactos);
            break;

        case '4':
            let nombreContacto = prompt ("Introduzca el nombre del nuevo contacto");
            let telefonoContacto = prompt("Introduzca el telefono del nuevo contacto");
            let correoContacto = prompt("Introduzca el correo del nuevo contacto");

            if (nombreContacto == null || telefonoContacto == null || correoContacto == null) {
                do {
                    alert("No has introducido todos los campos requeridos, por favor vuelvelos a introducir");

                    nombreContacto = prompt ("Introduzca el nombre del nuevo contacto");
                    telefonoContacto = prompt("Introduzca el telefono del nuevo contacto");
                    correoContacto = prompt("Introduzca el correo del nuevo contacto");
                    
                } while (nombreContacto == null || telefonoContacto == null || correoContacto == null);

                listaContactos.push({
                    nombre: nombreContacto,
                    telefono: telefonoContacto,
                    correo: correoContacto
                })
            } else{
                listaContactos.push({
                    nombre: nombreContacto,
                    telefono: telefonoContacto,
                    correo: correoContacto
                })
            }
            break;
        
        case '5':
            alert("Has seleccionado salir del programa");
            break;
            
        default:
            alert("Opción no válida, seleccione de nuevo");
            break;
    }
} while (opcionUsuario != '5');

alert("Programa finalizado");