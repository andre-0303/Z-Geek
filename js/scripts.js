function AdicionarAoCarrinho(nome, preco){
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const produtoExistente = carrinho.find(item => item.nome === nome);

    if (produtoExistente){
        produtoExistente.quantidade += 1;
    }else {
        carrinho.push({ nome: nome, preco: preco, quantidade: 1});
    }

    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    alert(nome + ' adicionado ao carrinho!');
}

function irParaCarrinho(){
    window.location.href = 'carrinho.html';
}