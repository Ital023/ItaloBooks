function aplicarDesconto(livros){
    const desconto = 0.3;

    livrosComDesconto = livrosConvertidos.map(livro =>{
        return{...livro,preco: livro.preco - (livro.preco * desconto)}
    })
    return livrosComDesconto;
}