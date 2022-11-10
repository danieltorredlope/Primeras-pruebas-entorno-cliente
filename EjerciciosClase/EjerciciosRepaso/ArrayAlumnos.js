/*
Crear una pagina donde se mostrara el listado de alumnos (minimo 15, que estaran en un array que se habrá inicializado
    al principio del codigo javascript). Y tambien habra que mostrar sus notas que se recuperaran desde la funcion prompt del 
    objeto window indicando "introduzca la nota del <alumno>: " y al final de la pagina tiene que aparecer la media de la clase
*/
let notaAlumno;

let arrayAlumnos = [{
    "nombre" : "Alumno1",
     "nota" : "0"
},
{
    "nombre": "Alumno2",
    "nota": "0"
},
{
    "nombre": "Alumno3",
    "nota": "0"
},
{
    "nombre": "Alumno4",
    "nota": "0"
},
{
    "nombre": "Alumno5",
    "nota": "0"
},
{
    "nombre": "Alumno6",
    "nota": "0"
},
{
    "nombre": "Alumno7",
    "nota": "0"
},
{
    "nombre": "Alumno8",
    "nota": "0"
},
{
    "nombre": "Alumno9",
    "nota": "0"
},
{
    "nombre": "Alumno10",
    "nota": "0"
},
{
    "nombre": "Alumno11",
    "nota": "0"
},
{
    "nombre": "Alumno12",
    "nota": "0"
},
{
    "nombre": "Alumno13",
    "nota": "0"
},
{
    "nombre": "Alumno14",
    "nota": "0"
},
{
    "nombre": "Alumno15",
    "nota": "0"
}]

console.log(arrayAlumnos.length);

function introducirNota(){
    for (let i = 0; i < arrayAlumnos.length; i++) {
        notaAlumno=prompt("Introduce la nota del alumno "+arrayAlumnos[i].nombre);
        arrayAlumnos[i].nota = notaAlumno;
        console.log(arrayAlumnos[i].nota);
    }  
}


function calcularMedia()
 {
     let media = 0 ; 
     for(let i = 0 ; i < arrayAlumnos.length ; i++)
     {
         
         media = parseFloat(media) + parseFloat(arrayAlumnos[i].nota) ; 
         
         console.log(arrayAlumnos[i].nota);
         let alumnos = arrayAlumnos.length;
         
         if(arrayAlumnos.length == i+1)
         {
             console.log("La nota media de los alumnos es : "+media/arrayAlumnos.length);
         }
     }
 }

 function corregirNotas(){
    let notaCorregida=0;
    let corregirNota="";

    for(let i = 0 ; i < arrayAlumnos.length ; i++){
        corregirNota = prompt("El Alumno: "+ arrayAlumnos[i].nombre+" tiene la nota: "+arrayAlumnos[i].nota+"\n¿Quieres corregir la nota del alumno?");
        if (corregirNota.toUpperCase() == "SI") {
            notaCorregida = prompt("Introduce la nueva nota para el alumno");
            arrayAlumnos[i].nota = parseFloat(notaCorregida);
            alert("Se ha corregido la nota del alumno: "+arrayAlumnos[i].nombre+", su nueva nota es: "+arrayAlumnos[i].nota);
        }
     }
     console.log(arrayAlumnos);
 }

introducirNota();
calcularMedia();
corregirNotas();