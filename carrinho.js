let carrinho = {};
const precos = { /* Variavel de preços.  Isso permite que o código saiba quanto custa cada item para calcular o total da compra. */
  iphone11: 3000.00,
  Carregador: 120.00,
  AirPodsMax: 6590.00,
  Airtag: 369.00,
  Airpods: 1000.00,
  Capinha: 600.00
};

function adicionarItem(item) { /* Essa variavel verifica se o item está no carrinho e se estiver, soma com a quantidade desejada  */
  if (carrinho[item]) {
    carrinho[item]++;
  } else {
    carrinho[item] = 1;
  }
  atualizarCarrinho();
}

function removerItem(item) { /* Ela verifica se o item está no carrinho (carrinho[item]), e se estiver, diminui a quantidade desse item no carrinho. Se a quantidade chegar a zero, o item é removido do carrinho. */
  if (carrinho[item]) {
    carrinho[item]--;
    if (carrinho[item] === 0) {
      delete carrinho[item];
    }
    atualizarCarrinho();
  }
}

function calcularTotal() { /* Var que soma todos os itens do carrinho e multiplica pelo preço. O resultado volta com duas casas decimais */
  let total = 0;
  for (let item in carrinho) {
    total += carrinho[item] * precos[item];
  }
  return total.toFixed(2);
}


function atualizarCarrinho() { /* Essa variavel atualiza o carrinho, sempre que adiciona ou remova algum item. */
  const carrinhoDiv = document.getElementById('carrinho');
  carrinhoDiv.innerHTML = '';
  for (let item in carrinho) {
    const div = document.createElement('div');
    div.textContent = `${item} x${carrinho[item]}`;
    carrinhoDiv.appendChild(div);
  }
  document.getElementById('total').textContent = `R$ ${calcularTotal()}`;
}



function atualizarCarrinho() {
  const carrinhoDiv = document.getElementById('carrinho');
  carrinhoDiv.innerHTML = '';
  for (let item in carrinho) {
    const div = document.createElement('div');
    div.textContent = `${item} x${carrinho[item]}`;
    carrinhoDiv.appendChild(div);
  }
  document.getElementById('total').textContent = `R$ ${calcularTotal()}`;
}