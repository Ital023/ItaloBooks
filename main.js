var livros = [];

var endPointLivros = "https://guilhermeonrails.github.io/casadocodigo/livros.json";

getBuscarLivrosAPI();

async function getBuscarLivrosAPI(){
    var livros = await fetch(endPointLivros);
    var livrosConvertidos = await livros.json();
    console.table(livrosConvertidos);
}