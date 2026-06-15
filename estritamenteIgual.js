prompt = require ('prompt-sync')();
const numero1 = Number(prompt("Digite nº1: "));
const numero2 = (prompt("Digite nº2: "));
if (numero1===numero2) {                              
    console.log("Os números são iguais");
} else {
    console.log("Os números são diferentes");
}