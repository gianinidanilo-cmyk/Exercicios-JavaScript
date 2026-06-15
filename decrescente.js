const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const numero = Number (frm.inNumero.value);

    let resposta = ` Entre ${numero} e 1: `; //string para montar a resposta
    for (let i = numero; i > 1; i--){
        resposta = resposta + i + " , "; //resposta acumula numero e virgulas
        //resposta = `${resposta} ${i}`;
    }
    resposta = resposta + "1.";
    resp.innerText = resposta;
})
