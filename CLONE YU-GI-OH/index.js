const btnAvancar = document.getElementById("btn-avancar");

const btnVoltar = document.getElementById("btn-voltar");

const cartoes = document.querySelectorAll(".cartao");

let cartaoAtual = 0;

cartoes[cartaoAtual].classList.add("selecionado");

btnAvancar.addEventListener("click", function () {

    cartoes[cartaoAtual].classList.remove("selecionado");

    cartaoAtual++;

    if (cartaoAtual >= cartoes.length) {
        cartaoAtual = cartoes.length - 1;
    }

    cartoes[cartaoAtual].classList.add("selecionado");
});


btnVoltar.addEventListener("click", function () {

    cartoes[cartaoAtual].classList.remove("selecionado");

    cartaoAtual--;

    if (cartaoAtual < 0) {
        cartaoAtual = 0;
    }


    cartoes[cartaoAtual].classList.add("selecionado");

    const cartaFundo = document.querySelector(".fundo-final");

    cartaFundo.style.display = "none";

    btnAvancar.disabled = false;

    cartoes[cartaoAtual].classList.add("selecionado");
});
