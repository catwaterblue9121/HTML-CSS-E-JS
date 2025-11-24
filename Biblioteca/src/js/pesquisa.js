// src/js/pesquisa.js
// Versão com logs de debug, busca ao digitar e fallback caso DOM não esteja pronto.

(function () {
  // debug inicial — se não aparecer no console o arquivo não foi carregado
  console.log("pesquisa.js carregado");

  // garante que o DOM esteja pronto
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".search-bar");
    if (!form) {
      console.error("Form .search-bar não encontrado. Confira o seletor e o HTML.");
      return;
    }

    const input = form.querySelector("input[type='text'], input");
    if (!input) {
      console.error("Input de busca não encontrado dentro do formulário .search-bar.");
      return;
    }

    const livrosContainer = document.querySelectorAll(".livro");
    if (!livrosContainer || livrosContainer.length === 0) {
      console.warn("Nenhum elemento .livro encontrado na página. Verifique se as classes conferem.");
    } else {
      console.log(livrosContainer.length + " livros detectados.");
    }

    // função que executa o filtro
    function filtrar() {
      const termo = input.value.trim().toLowerCase();

      // se termo vazio -> mostra todos
      if (termo === "") {
        livrosContainer.forEach(l => (l.style.display = "flex"));
        return;
      }

      livrosContainer.forEach(livro => {
        const tituloEl = livro.querySelector("h3");
        const titulo = tituloEl ? tituloEl.textContent.toLowerCase() : "";

        if (titulo.includes(termo)) {
          livro.style.display = "flex";
        } else {
          livro.style.display = "none";
        }
      });
    }

    // submit (pressionar Buscar ou Enter)
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      filtrar();
    });

    // filtrar enquanto digita (UX melhor)
    input.addEventListener("input", function () {
      filtrar();
    });

    // atalho: tecla ESC limpa a busca
    input.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        input.value = "";
        filtrar();
      }
    });
  });
})();
