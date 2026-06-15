const frm = document.querySelector("form");
const resp1 = document.querySelector("#outTempo");
const resp2 = document.querySelector("#outTroco");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const valor = Number(frm.inValor.value);
    const valorTempo1 = Number (1.00);
    const valorTempo2 = Number (1.75);
    const valorTempo3 = Number (3.00);

    if (valor >= valorTempo1) {
        resp1.innerText = `Tempo de permanência 30min.`;
        resp2.innerText = `Troco ${(valor - valorTempo1).toFixed(2)}`;
    }
    else if (valor >= valorTempo2) {
        resp1.innerText = `Tempo de permanência 60min.`
        resp2.innerText = `Troco ${(valor - valorTempo2).toFixed(2)}`;
    }
    else if (valor >= valorTempo3) {
        resp1.innerText = `Tempo de permanência máx. 120min.`;
        resp2.innerText = `Troco ${(valor - valorTempo3).toFixed(2)}`;
    }
    else if (valor < valorTempo1) {
        resp1.innerText = `Valor insulficiênte para permamnência.`;
        resp2.innerText = `Troco ${valor.toFixed(2)}`;
    }
    })
