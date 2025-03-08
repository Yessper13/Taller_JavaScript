let nomAnimal = prompt("Nombre de la mascota");
let comidaPre = parseInt(prompt("escribe el numero para el tipo de comida preferida: \n1. croquetas de pollo \n2. croquetas naturales \n3. croquetas de tocino"));
let porciones = parseFloat(prompt(`digitar numero de porciones que ${nomAnimal} come al dia`));
let comida;
let vlrPorcion = 0;
let vlrAlimento = 0;

switch (comidaPre) {
    case 1:
        vlrPorcion = 15000;
        comida = "croquetas de pollo";
        break;
    case 2:
        vlrPorcion = 10000;
        comida = "croquetas Naturales";
        break;
    case 3:
        vlrPorcion = 18000;
        comida = "croquetas de tocino";
        break;    
    default:
        console.log("Opción no válida. Se asignará un valor por defecto.");
        vlrPorcion = 0;
    break;
}
vlrAlimento = vlrPorcion*porciones;
console.log(`__________________________________________`);
console.log(`Nombre de mascota:   | ${nomAnimal}`);
console.log(`Tu mascota come ${comida}`);
console.log(`El valor por porcion es de ${vlrPorcion}`);
console.log(`El valor total de consumo es de ${vlrAlimento}`);
console.log(`__________________________________________`);

