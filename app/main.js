var livrosConvertidos = [];
var elementoInserirLivros = document.querySelector("#livros");

var endPointLivros = "https://guilhermeonrails.github.io/casadocodigo/livros.json";

getBuscarLivrosAPI();

async function getBuscarLivrosAPI(){
    var livros = await fetch(endPointLivros);
    livrosConvertidos = await livros.json();

    var livrosComDesconto = aplicarDesconto(livrosConvertidos);
    exibirOsLivrosNaTela(livrosComDesconto);
}

