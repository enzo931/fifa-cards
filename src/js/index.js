// Seleção dos elementos do DOM
const botaoFiltrar = document.querySelector(".btn-filtrar");
const botaoLimpar = document.querySelector(".btn-limpar");
const campoCategoria = document.querySelector("#categoria");
const campoPreco = document.querySelector("#preco");
const cartas = document.querySelectorAll(".carta");
const mensagemVazia = document.querySelector("#mensagem-vazia");

// Listeners de Eventos
botaoFiltrar.addEventListener("click", aplicarFiltros);
botaoLimpar.addEventListener("click", limparFiltros);

// Executa o filtro ao pressionar Enter no campo de preço
campoPreco.addEventListener("keydown", function (evento) {
  if (evento.key === "Enter") {
    aplicarFiltros();
  }
});

// Função principal de filtragem
function aplicarFiltros() {
  const categoriaSelecionada = campoCategoria.value;
  const precoMaximoSelecionado = campoPreco.value;

  let totalCartasVisiveis = 0;

  cartas.forEach(function (carta) {
    const categoriaValida = verificarCategoria(carta, categoriaSelecionada);
    const precoValido = verificarPreco(carta, precoMaximoSelecionado);

    const deveMostrar = categoriaValida && precoValido;

    if (deveMostrar) {
      carta.classList.remove("esconder");
      totalCartasVisiveis++;
    } else {
      carta.classList.add("esconder");
    }
  });

  // Exibe mensagem se nenhuma carta corresponder aos filtros
  if (totalCartasVisiveis === 0) {
    mensagemVazia.classList.remove("esconder");
  } else {
    mensagemVazia.classList.add("esconder");
  }
}

// Verifica se a carta atende o filtro de categoria
function verificarCategoria(carta, categoriaSelecionada) {
  const categoriaCarta = carta.dataset.categoria;
  return (
    categoriaSelecionada === "" ||
    categoriaSelecionada.toLowerCase() === categoriaCarta.toLowerCase()
  );
}

// Verifica se a carta atende o filtro de preço
function verificarPreco(carta, precoMaximoSelecionado) {
  if (precoMaximoSelecionado === "") return true;

  const precoCarta = parseFloat(carta.dataset.preco);
  const precoMaximo = parseFloat(precoMaximoSelecionado);

  return precoCarta <= precoMaximo;
}

// Reseta todos os campos de entrada e reexibe todas as cartas
function limparFiltros() {
  campoCategoria.value = "";
  campoPreco.value = "";

  cartas.forEach(function (carta) {
    carta.classList.remove("esconder");
  });

  mensagemVazia.classList.add("esconder");
}