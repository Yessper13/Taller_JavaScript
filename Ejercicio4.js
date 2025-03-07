let nombre = prompt("Igresa tu nombre");
let estrato = parseInt(prompt("Digita tu estrato"));
let vlrMatricula = 1500000;
let descuento = 0;
let vlrCnDesto = 0;
let recargo = 0;
let vlrCnRecargo = 0;
let vlrTotal = 0;

switch (estrato) {
    case 1:
        descuento = 40;
        
        break;
    case 2:
        descuento = 30;
        
        break;
    case 3:
        descuento = 10;
        
        break;
    case 4:
        recargo = 10;
        
        break;
    case 5:
        recargo = 20;
        
        break;
    case 6:
        recargo = 40;
        
        break;

    default:
        recargo = 0;
        descuento = 0;
        break;
}

vlrCnDesto = (vlrMatricula *descuento)/100;
vlrCnRecargo = (vlrMatricula*recargo)/100;
vlrTotal = (vlrMatricula-vlrCnDesto)-vlrCnRecargo;

console.log(`_________________________________`);
console.log(`Señor(a) ${nombre}`);
console.log(`el valor de tu matricula es de ${vlrMatricula}`);
console.log(`tu estrato es ${estrato}`);
if(estrato < 4){
    console.log(`vas a teer un descuento del ${descuento.toFixed(0)}%`);
    console.log(`no tienes recargos disponibles`);
}else{
    console.log(`No tienes descuentos disponibles`);
    console.log(`pero si se te brinda un recargo de ${recargo.toFixed(0)}%`);
}
console.log(`el valor total a pagar es de ${vlrTotal}`);
console.log(`_________________________________`);
