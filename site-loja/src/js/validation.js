const form = document.getElementById("formContato");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (nome.length < 3) {
        alert("O nome deve ter pelo menos 3 caracteres.");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Digite um e-mail válido.");
        return;
    }

    if (mensagem.length < 10) {
        alert("A mensagem deve ter pelo menos 10 caracteres.");
        return;
    }

    alert("Formulário enviado com sucesso! 🎉");
    form.reset();
});
