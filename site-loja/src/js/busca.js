document.addEventListener("DOMContentLoaded", () => {
    const searchIcon = document.querySelector(".busca");
    const searchBox = document.getElementById("searchBox");

    if (searchIcon && searchBox) {
        searchIcon.addEventListener("click", () => {
            searchBox.classList.toggle("active");
        });
    }
});

const searchInput = document.querySelector('#searchBox input');
const searchBtn = document.querySelector('#searchBox button');
const todasSecoes = document.querySelectorAll('section');


function filtrarProdutos() {
    const termo = searchInput.value.toLowerCase();

    todasSecoes.forEach(secao => {
        const produtos = secao.querySelectorAll('.produto');
        let temProdutoVisivel = false;

        produtos.forEach(produto => {
            const nome = produto.querySelector('h3').textContent.toLowerCase();
            if (nome.includes(termo)) {
                produto.style.display = 'block';
                temProdutoVisivel = true;
            } else {
                produto.style.display = 'none';
            }
        });

        if (temProdutoVisivel) {
            secao.style.display = 'block';
        } else {
            secao.style.display = 'none';
        }
    });
}

searchInput.addEventListener('input', filtrarProdutos);

searchInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') filtrarProdutos();
});

searchBtn.addEventListener('click', filtrarProdutos);
