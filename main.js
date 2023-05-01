var livrosConvertidos = [];
var elementoInserirLivros = document.querySelector("#livros");

var endPointLivros = "https://guilhermeonrails.github.io/casadocodigo/livros.json";

getBuscarLivrosAPI();

async function getBuscarLivrosAPI(){
    var livros = await fetch(endPointLivros);
    livrosConvertidos = await livros.json();
    console.table(livrosConvertidos);
    exibirOsLivrosNaTela(livrosConvertidos);
}

function exibirOsLivrosNaTela(listaDeLivros){
    listaDeLivros.forEach(livro =>{
        elementoInserirLivros.innerHTML += `
        <div class="livro">
      <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
      <h2 class="livro__titulo">
        ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.descricao}</p>
      <p class="livro__preco" id="preco">${livro.preco}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>
        `
    })
}
