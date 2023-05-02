var btnOrdenarPreco = document.querySelector("#btnOrdenarPorPreco");

btnOrdenarPreco.addEventListener("click",()=>{
    console.log("oi");
    var livrosOrdenados = livrosConvertidos.sort((a,b)=> a.preco - b.preco);
    exibirOsLivrosNaTela(livrosOrdenados);
})