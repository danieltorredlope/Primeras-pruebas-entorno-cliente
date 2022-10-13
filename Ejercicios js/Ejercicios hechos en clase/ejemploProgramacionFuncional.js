
let miArrayNotas = [5.4, 5, 3, 2, 2.4, 6, 6, 9];

//Primera forma de hacerlo
/*
let miArrayAprobados=[];

for (let i = 0; i < miArrayNotas.length; i++) {
    let nota = miArrayNotas[i];

    if (nota >= 5) {
        miArrayAprobados.push(nota);
    }  
}

console.log(miArrayAprobados);*/

//Segunda forma de hacerlo
/*
let miArrayAprobados = miArrayNotas.filter(function(nota){
    if(nota>=5){
        return true;
    } else{
        return false;
    }
})

console.log(miArrayAprobados);
*/

/*
//Tercera forma de hacerlo
let miArrayAprobados = miArrayNotas.filter(function(nota){
    return nota >= 5;
})

console.log(miArrayAprobados);*/

//Cuarta forma de hacerlo
let miArrayAprobados = miArrayNotas.filter(nota => nota >= 5);
console.log(miArrayAprobados);