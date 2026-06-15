prompt = require ('prompt-sync')();
const numero1 = Number(prompt("Digite número 1"));
const numero2 = Number(prompt("Digite número 2"));
if (numero1>numero2) {                              
    console.log("Número1 maior que número2");
} else {
    console.log("Número2 maior que número1");
}