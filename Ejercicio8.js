let peso = parseFloat(prompt("Ingresa tu peso en kg (ejemplo. 70)"));
let altura = parseFloat(prompt("Ingresa tu altura en metros (ejemplo. 1.70)"));
let IMC = peso / (altura * altura);
let diagnostico;

if (IMC < 16) {
    diagnostico = "Criterio de ingreso en hospital";
} else if (IMC >= 16 && IMC <= 17) {
    diagnostico = "Infrapeso";
} else if (IMC >= 17 && IMC <= 18) {
    diagnostico = "Bajo peso";
} else if (IMC >= 18 && IMC <= 25) {
    diagnostico = "Peso normal (saludable)";
} else if (IMC >= 25 && IMC <= 30) {
    diagnostico = "Sobrepeso (obesidad de grado I)";
} else if (IMC >= 30 && IMC <= 35) {
    diagnostico = "Sobrepeso crónico (obesidad de grado II)";
} else if (IMC >= 35 && IMC <= 40) {
    diagnostico = "Obesidad premórbida (obesidad de grado III)";
} else {
    diagnostico = "Obesidad mórbida (obesidad de grado IV)";
}

console.log(`___________________________________________`);
console.log(`-------------------------------------------`);
console.log(`-------------->DIAGNÓSTICO<----------------`);
console.log(`-------------------------------------------`);
console.log(`Peso: ${peso} kg`);
console.log(`Altura: ${altura} m`);
console.log(`Valor IMC: ${IMC.toFixed(2)}`);
console.log(`Diagnóstico: ${diagnostico}`);
console.log(`-------------------------------------------`);
console.log(`-------------->DIAGNÓSTICO<----------------`);
console.log(`-------------------------------------------`);
console.log(`___________________________________________`);