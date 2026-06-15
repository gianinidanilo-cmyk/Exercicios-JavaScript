//criar referencias para tags e id
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");


//adicionar ouvinte de envento submit

    frm.addEventListener("submit", (e) => {
    e.preventDefault();
    //Validação do valor do saque vendo se o resto da divisão é igual a 0
    const saque = Number(frm.inSaque.value);
    if(saque % 10 !=0) {
        alert("Valor inválido para notas disponíveis (10, 50,100)");
        frm.inSaque.focus();                       //focus() coloca o cursor no campo inSaque
        return;
    }
    const notasCem = Math.floor(saque/100);        //arredonda para baixo o valor da divisão, calcula o numero de notas de cem
    let resto = saque % 100;                       // quanto sobra para a pagar
    const notasCinquenta = Math.floor(resto/50); //Calcula notas de 50
    resto = resto % 50;                                    // calcula se ainda sobrou
    const notasDez = Math.floor(resto/10);         // Calcula notas de 10

    //exibe as notas se houver
    if(notasCem>0){
        resp1.innerText = `Notas de R$100: ${notasCem}`;
    }
     if(notasCinquenta>0){
        resp2.innerText = `Notas de R$50: ${notasCinquenta}`;
    }
     if(notasDez>0){
        resp3.innerText = `Notas de R$10: ${notasDez}`;
    }

})