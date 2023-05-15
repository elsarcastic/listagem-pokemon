const botaoAlterarTema = document.getElementById("btn-alterar-tema");

const body = document.querySelector("body");

const imgBotaoTrocaTema = document.querySelector(".img-botao");

const modoEscuroAtivo = body.classList.contains("body-escuro")

botaoAlterarTema.addEventListener("click", () => {
    body.classList.toggle("body-escuro");

    if (modoEscuroAtivo) {
        imgBotaoTrocaTema.setAttribute("src", "./src/imagens/sun.png")
    }
    else {
        imgBotaoTrocaTema.setAttribute("src", "./src/imagens/moon.png")
    }
})