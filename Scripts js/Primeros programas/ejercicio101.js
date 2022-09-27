let precioRosa = 8;
let cantidadRosas = 70;
let precioLirio = 10;
let cantidadLirios = 50;
let precioTulipan = 2;
let cantidadTulipanes = 120;

let precioTotalRosas = precioRosa * cantidadRosas;
let precioTotalLirios = precioLirio * cantidadLirios;
let precioTotalTulipanes = precioTulipan * cantidadTulipanes;

let precioTotalFlores = precioTotalLirios + precioTotalRosas + precioTotalTulipanes;

console.log("Rosa: " + "precio unitario: " + precioRosa + " , cantidad: " + cantidadRosas + ", valor: " + precioTotalRosas);
console.log("Lirio: " + "precio unitario: " + precioLirio + " , cantidad: " + cantidadLirios + ", valor: " + precioTotalLirios);
console.log("Tulipán: " + "precio unitario: " + precioTulipan + " , cantidad: " + cantidadTulipanes + ", valor: " + precioTotalTulipanes);
console.log("Total: " + precioTotalFlores);


