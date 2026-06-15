const prompt = require ('prompt-sync')();
const nome1 = String(prompt("Digite nome 1"));
const nome2 = String(prompt("Digite nome 2"));
if (nome1!=nome2) {                              //comando diferente
    console.log("Os nomes são diferentes");
} else {
    console.log("Os nomes são iguais");
}