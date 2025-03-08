let nombre = prompt("Escribe tu nombre");
let hrsEstudio = parseFloat(prompt("Horas de estudio por semana"));
let tmpDedicado;
let cantMin;

tmpDedicado = (hrsEstudio/168)*100;
cantMin = hrsEstudio*60;


console.log(`________________________________________`);
console.log(`|tu nombre es:                          |--> ${nombre}`);
console.log(`|tiempo dedicado a estudiar por semana  |-->${hrsEstudio}`);
console.log(`|porcentaje semanal por tiempo estudiado|-->${tmpDedicado.toFixed(2)}%`);
console.log(`|Cantidad de minutos dedicados          |-->${cantMin}`);
console.log(`__________________________________________`);