let nombreCliente = prompt("Dígame su nombre, por favor");
alert(typeof (nombreCliente));

//1. comprobamos que el nombre del cliente sea un string y que no sea nulo, si no es así insistimos
while (typeof (nombreCliente) != 'string' || typeof (nombreCliente) == null) {
    let nuevoNombreCliente = prompt("Ha indicado un valor erróneo para el campo nombre, vuelva a intentarlo, por favor");
    nombreCliente = nuevoNombreCliente;
}

//1. comprobamos que la edad del cliente sea un numero y que no sea nulo, si no es así insistimos
let edadCliente = prompt("Dígame su edad, por favor");
alert(typeof (edadCliente));

while (typeof(edadCliente) != 'number' || typeof(edadCliente) == null) {
    let nuevaEdadCliente = prompt("Ha indicado un valor erróneo para el campo edad, vuelva a intentarlo, por favor");
    edadCliente = nuevaEdadCliente;
}
