//Cria referencia ao form e ao h3 da resposta
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

//criar ouvinte de evento quando submit for clicado
frm.addEventListener("submit",(e) => {
    e.preventDefault();  // evita o envio do form

    const nome = frm.inNome.value;  //obtendo valores
    const masculino = frm.inMasculino.checked;
    const altura = Number (frm.inAltura.value);

    const peso = masculino ? 22*Math.pow(altura,2) : 21*Math.pow(altura,2);


    //let peso;    // declara a variavel chamada peso

     // se acondição é TRUE executa aqui
   // if(masculino){
       // peso = 22* Math.pow(altura, 2);  // math.pow eleva ao quadrado

        // se a condição é False executa a aqui
     //else{
       // peso = 21 *Math.pow(altura, 2);}

    

    resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)} Kg`;
})

    frm.addEventListener("reset",(e) => {
    resp.innerText="";  //limpa o conteudo do campo do elemento h3
    })


