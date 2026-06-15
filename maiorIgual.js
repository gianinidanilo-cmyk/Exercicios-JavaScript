prompt = require ('prompt-sync')();
const idade = Number(prompt("Digite sua idade"));

if (idade >= 18) {                              
    console.log("Entrada liberada");
} else {
    console.log("Entrada negada");
}