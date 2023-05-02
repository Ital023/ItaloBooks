var botoes = document.querySelectorAll(".btn");

botoes.forEach(botao=>{
    botao.addEventListener("click",()=>{
        var categoria = botao.value;
        var livrosFiltrados = livrosConvertidos.filter(livro => 
            livro.categoria == categoria);
            exibirOsLivrosNaTela(livrosFiltrados);
    })
})