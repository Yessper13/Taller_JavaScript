let nombre = prompt("Ingresa tu nombre");
let estrato = parseInt(prompt("Ingresa tu estrato"));
let edad = parseInt(prompt("Ingresa tu edad"));
let escolaridad = parseInt(prompt("ingresa tu escolaridad"));
let genero = parseInt(prompt("ingresa el numero correspondiente a tu genero. \n 1. Maculino \n 2. Femenino"));
let sisben = prompt("ingresa tu sisben");
let beca

if (estrato === 2 && edad >= 16 && escolaridad === 10 && genero === 2){
    beca = "✔️✔️✔️aplicas✔️✔️✔️";
}else{
    beca = "✖️✖️✖️no aplica ✖️✖️✖️";
}

console.log(`____________________________________________`);
console.log(`Estrato      |${estrato}`);
console.log(`Edad         |${edad}`);
console.log(`Escolaridad  |${escolaridad}`);
console.log(`Genero       |${genero}`);
console.log(`Tu ${beca} para obtener la beca`);
console.log(`____________________________________________`);



