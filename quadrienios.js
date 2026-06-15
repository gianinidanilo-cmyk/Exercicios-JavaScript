const prompt = require ('prompt-sync')(); // adiciona pacote ao programa
const salario = Number(prompt("Digite o salário")); // lê o salario
const anos = Number(prompt("Tempo de empresa"));
const quadrienios = anos/4; // const quadrienios = Math.floor(anos/4);
const acrecismo = quadrienios*0.01;
const salarioFinal = salario +(salario*acrecismo); // const acrescimo = salario*quadrienios/100 (calcula o valor do acrecimo)
console.log (`Quadrienios ${quadrienios}`);
console.log (`Salário final R$ ${salarioFinal.toFixed(3)}`); // exibe o salario final com acrescimo

