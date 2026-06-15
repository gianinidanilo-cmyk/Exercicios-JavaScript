const frm = document.querySelector("form"); 
const resp = document.querySelector("h3");

frm.addEventListener("submit",(e) => {
    e.preventDefault(); 

    const horarioBrasil = Number(frm.inHoraBrasil.value);
    let horaFranca = horarioBrasil + 5;
    if (horaFranca > 24) {horaFranca  = horaFranca -24;
    
    resp.innerText = `Hora na França ${horaFranca.toFixed(2)}hs`;
    }
    else {
    resp.innerText = `Hora na França ${horaFranca.toFixed(2)}hs`;
}


})