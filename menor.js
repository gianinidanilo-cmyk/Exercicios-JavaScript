prompt = require ('prompt-sync')();
const numero1 = Number(prompt("Digite nº1"));
const numero2 = Number(prompt("Digite nº2"));
if (numero1<numero2) {                              
    console.log("O nº2 maior que o nº1");
} else {
    console.log("O nº1 maior que nº2");
}