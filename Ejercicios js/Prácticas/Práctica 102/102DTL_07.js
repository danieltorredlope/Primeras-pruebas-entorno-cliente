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
    "1. Ordenación por nombre\n"+
    "2. Ordenación por teléfono\n"+
    "3. Ordenación por correo electrónico"
];

let opcionOrdenar = prompt("¿Por qué opción deseas ordenar?");

function ordenar(indiceOrdenacion) {
    listaContactos.sort(indiceOrdenacion);
    console.log(listaContactos);
}

if (opcionOrdenar == 'nombre') {
    ordenar(opcionOrdenar);
    alert("El array ha sido ordenado por nombre");
}

if (opcionOrdenar == 'telefono') {
    ordenar(opcionOrdenar);
    alert("El array ha sido ordenado por telefono");
}

if (opcionOrdenar == 'correo') {
    ordenar(opcionOrdenar);
    alert("El array ha sido ordenado por correo");
}