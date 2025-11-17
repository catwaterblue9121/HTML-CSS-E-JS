const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("senha");

togglePassword.addEventListener("click", () => {
    const type = password.type === "password" ? "text" : "password";
    password.type = type;

    togglePassword.classList.toggle("fa-eye");
    togglePassword.classList.toggle("fa-eye-slash");
});
document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    const resposta = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: email, senha: senha })
    });

    const result = await resposta.text();

    if (resposta.ok) {
        alert("Login realizado!");
        // redirecionar se quiser
        // window.location.href = "home.html";
    } else {
        alert("Erro ao logar: " + result);
    }
});