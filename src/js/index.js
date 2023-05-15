const botaoAlterarTema = document.getElementById("btn-alterar-tema");

const body = document.querySelector("body");

const imgBotaoTrocaTema = document.querySelector(".img-botao");


botaoAlterarTema.addEventListener("click", () => {
    body.classList.toggle("body-escuro"); 
    const modoEscuroAtivo = body.classList.contains("body-escuro");

    if (modoEscuroAtivo) {
        imgBotaoTrocaTema.setAttribute("src", "./src/imagens/sun.png");
    }
    else {
        imgBotaoTrocaTema.setAttribute("src", "./src/imagens/moon.png");
    }
})
