const prompt = require ('prompt-sync')();
const peso = Number (prompt("Digite o peso da ração(kG)"));
const consumo = Number(prompt("Consumo diário(g)"));
const pesoGramas = peso*1000;
const duracao = Math.floor(pesoGramas/consumo);
const sobra = pesoGramas%consumo;
console.log(`Duração:${duracao}dias`);
console.log(`sobra:${sobra}`);

//