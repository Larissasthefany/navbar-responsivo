const listaDeSelecao = document.querySelectorAll(".lista");
const imagensCard = document.querySelectorAll(".cartao-imagens");

listaDeSelecao.forEach((cartao) => {

  cartao.addEventListener("click", () => {
    // console.log(imagensCard)
    
    const cartoaAberto = document.querySelector(".aberto");
    cartoaAberto.classList.remove("aberto");
    console.log(cartoaAberto)

    const idSelecionado = cartao.attributes.id.value;

    const idDoCartaoParaAbrir = "cartao-" + idSelecionado;
    const cartaoParaAbrir = document.getElementById(
      idDoCartaoParaAbrir
    );
    cartaoParaAbrir.classList.add("aberto");

    const AtivoNaListagem = document.querySelector(".ativo");
    AtivoNaListagem.classList.remove("ativo");

    const SelecionadoNaListagem = document.getElementById(idSelecionado);
    SelecionadoNaListagem.classList.add("ativo");
  });
});