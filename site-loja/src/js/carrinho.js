document.addEventListener('DOMContentLoaded', () => {

  const cartButtons = document.querySelectorAll('.carrinhoicon');
  const cartList = document.getElementById('cartItems');
  const cartToggle = document.getElementById('cartToggle');
  const cartSubtotal = document.getElementById('cartSubtotal');

  let total = 0;

  function precoParaNumero(preco) {
    return parseFloat(preco.replace("R$ ", "").replace(/\./g, "").replace(",", "."));
  }

  function atualizarSubtotal() {
    cartSubtotal.textContent = `Subtotal: R$ ${total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }

  cartList.style.display = 'none';

  cartToggle.addEventListener('click', (e) => {
    e.preventDefault();
    cartList.style.display = cartList.style.display === 'block' ? 'none' : 'block';
  });

  cartButtons.forEach(button => {
    button.addEventListener('click', () => {
      const produto = button.closest('.produto');
      const nome = produto.querySelector('h3').innerText;
      const precoText = produto.querySelector('.preco').innerText;
      const preco = precoParaNumero(precoText);

      const li = document.createElement('li');
      li.textContent = `${nome} - ${precoText}`;
      cartList.insertBefore(li, cartSubtotal);

      total += preco;
      atualizarSubtotal();

      cartList.style.display = 'block';
    });
  });

});