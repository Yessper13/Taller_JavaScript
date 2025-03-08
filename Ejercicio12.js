let empleado = prompt("Ingresa nombre de empleado");
let salario = parseFloat(prompt("Ingresa salario"));
let mesTrabajo = parseInt(prompt("Ingresa en numero de meses trabajados"));
let hijos = parseInt(prompt("Ingresa el numero de hijos que tienes"));
let estrato = parseInt(prompt("Ingresa tu estrato"));

let bonificacion1 = 0;
let bonificacion2 = 0;
let bonificacion3 = 0;

if (hijos >= 3) {
    bonificacion1 = salario * 0.028;
} else {
    bonificacion1 = 0;
}

if (mesTrabajo > 10) {
    bonificacion2 = salario * 0.04;
} else {
    bonificacion2 = salario * 0.015;
}

if (estrato > 4) {
    bonificacion3 = salario * 0.08;
} else {
    bonificacion3 = salario * 0.15;
}

let totalPagar = salario + bonificacion1 + bonificacion2 + bonificacion3;


console.log(`__________________________________________`);
console.log(`Nombre de empleado          |${empleado}`);
console.log(`Salario                     |${salario}`);
console.log(`Numero de meses trabajados  |${mesTrabajo}`);
console.log(`Numero de hijos             |${hijos}`);
console.log(`Estrato                     |${estrato}`);
console.log(`Bonificación 1              | ${bonificacion1.toFixed(2)}`);
console.log(`Bonificación 2              | ${bonificacion2.toFixed(2)}`);
console.log(`Bonificación 3              | ${bonificacion3.toFixed(2)}`);
console.log(`Total a pagar               | ${totalPagar.toFixed(2)}`);
console.log(`__________________________________________`);

