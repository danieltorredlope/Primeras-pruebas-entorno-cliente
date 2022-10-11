/*
Crea la lista de contactos en un array, de tal manera que cada uno de sus elementos será 
un objeto que describa a un solo usuario (tres propiedades). 

Al final de la lista declarada de esta manera, agrega un nuevo contacto usando
un método de array, apropiado. El nuevo contacto es: Maisie Haley / 0913 531 3030 / risus.Quisque@urna.ca.

Muestra el primer y último contacto, de nuevo en el formato: nombre / teléfono / correo electrónico. (length)

*/

//Declaramos array de objetos
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

console.log(array);
//Declaramos una variable para obtener la ultima posicion del array
let ultimaPosicionArray = array.length-1;

console.log(array[0]);//Mostramos la primera posición del array
console.log(array[ultimaPosicionArray]);//Mostramos la última posición del array


//