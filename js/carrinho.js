function carregarCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const carrinhoDiv = document.getElementById('carrinho');
    carrinhoDiv.innerHTML = '';
    let total = 0;

    if (carrinho.length === 0) {
        carrinhoDiv.innerHTML = '<p>Seu carrinho está vazio.</p>';
        document.getElementById('total').innerText = '0.00';
        return;
    }

    carrinho.forEach((item, index) => {
        const subtotal = item.preco * item.quantidade;
        total += subtotal;
        carrinhoDiv.innerHTML += `
            <div>
                <p>${item.nome} - R$${item.preco.toFixed(2)} x ${item.quantidade} = R$${subtotal.toFixed(2)}</p>
                <button class="botao-carrinho" onclick="alterarQuantidade(${index}, 1)">+</button>
                <button class="botao-carrinho" onclick="alterarQuantidade(${index}, -1)">-</button>
                <button class="botao-carrinho" onclick="removerDoCarrinho(${index})">Remover</button>
            </div>
        `;
    });

    document.getElementById('total').innerText = total.toFixed(2);
}

function alterarQuantidade(index, quantidade) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho'));
    carrinho[index].quantidade += quantidade;

    if (carrinho[index].quantidade <= 0) {
        carrinho.splice(index, 1); 
    }

    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    carregarCarrinho();
}

function removerDoCarrinho(index) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho'));
    carrinho.splice(index, 1);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    carregarCarrinho();
}

function finalizarCompra() {
    alert('Compra finalizada! Total: R$' + document.getElementById('total').innerText);
    localStorage.removeItem('carrinho');
    window.location.href = 'index.html';
}

carregarCarrinho();