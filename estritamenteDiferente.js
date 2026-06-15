prompt = require ('prompt-sync')();
const numero1 = Number(prompt("Digite nº1: "));
const numero2 = Number(prompt("Digite nº2: "));
if (numero1!==numero2) {                              
    console.log("Os números são diferentes");
} else {
    console.log("Os números são iguais");
}