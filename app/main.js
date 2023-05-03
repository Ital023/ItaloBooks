var livrosConvertidos = [];
var livrosDisponiveis = [];
var elementoInserirLivros = document.querySelector("#livros");

var endPointLivros = "https://guilhermeonrails.github.io/casadocodigo/livros.json";

getBuscarLivrosAPI();

async function getBuscarLivrosAPI(){
    var livros = await fetch(endPointLivros);
    livrosConvertidos = await livros.json();

    var livrosComDesconto = aplicarDesconto(livrosConvertidos);
    exibirOsLivrosNaTela(livrosComDesconto);
}

function verificarDisponibilidade(livro){
    if(livro.quantidade > 0){
        return "livros__imagens";
    }else{
        return "livros__imagens indisponivel";
    }
}

