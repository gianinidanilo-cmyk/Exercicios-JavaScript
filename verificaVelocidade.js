const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");



frm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const velPermitida = Number(frm.inVelPermitida.value);
    const velCondutor = Number (frm.inVelCondutor.value);
    const multaLeve = velPermitida*1.20;
    

    if (velCondutor <= velPermitida) {
        resp1.innerText = `Sem Multa`;
        frm.inVelPermitida.focus();
        return;
    }
    if (velCondutor<= multaLeve){
        resp1.innerText = `velocidade do condutor:${velCondutor}Kh, multa leve.`;
    }
    else {
        resp1.innerText = `velocidade do condutor:${velCondutor}Kh, multa grave.`;
    }
})



