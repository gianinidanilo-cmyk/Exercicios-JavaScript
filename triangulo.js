const frm = document.querySelector("form");
const resp1 = document.querySelector("#outSimNao");
const resp2 = document.querySelector("#outTipo");

frm.addEventListener("submit", (e) =>{
    e.preventDefault();

    const ladoA = Number(frm.inLadoA.value);
    const ladoB = Number(frm.inLadoB.value);
    const ladoC = Number(frm.inLadoC.value);
    
    if ( ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA){

        if (ladoA == ladoB && ladoB == ladoC && ladoC ==ladoA){
            resp1.innerText = `Sim`;
            resp2.innerText = `Triâgulo equilátero`;
        }
        else if (ladoA != ladoB && ladoB != ladoC && ladoC != ladoA){
            resp1.innerText = `Sim`;
            resp2.innerText = `Triâgulo Escaleno`;
        }
        else{
            resp1.innerText = `Sim`;
            resp2.innerText = `Triâgulo Isóceles`; 
        }
        
    }
        else {
            resp1.innerText = `Não`;
            resp2.innerText = `Não é um Triâgulo`;
        }
})

