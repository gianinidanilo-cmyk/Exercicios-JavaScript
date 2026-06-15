prompt = require ('prompt-sync')();
const idade = Number(prompt("Digite sua idade"));

if (idade<=17) {                              
    console.log("Entrada negada");
} else {
    console.log("Entrada liberada");
}