var botoes = document.querySelectorAll(".btn");

botoes.forEach(botao=>{
    botao.addEventListener("click",()=>{
        var categoria = botao.value;
        if(categoria == "disponivel"){
            var livrosFiltrados = livrosConvertidos.filter(livro => 
                livro.quantidade > 0);
        }else{
            var livrosFiltrados = livrosConvertidos.filter(livro => 
                livro.categoria == categoria);
        }
        
        exibirOsLivrosNaTela(livrosFiltrados);

        if(categoria == "disponivel"){
            const valorTotal = calcularValorTotalLivrosDisponiveis(livrosFiltrados);
            exibirValorTotalLivros(valorTotal);
        }
    })
})

function exibirValorTotalLivros(valorTotal){
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
}