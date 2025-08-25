const imagem = document.getElementById("baiacu");
const audio = document.getElementById("meubaiacu");

imagem.addEventListener("click", () => {
    audio.play();
});

const toggleBtns = document.querySelectorAll(".toggle-btn");

toggleBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const content = btn.nextElementSibling;

        if (content.style.display === "block") {
            content.style.display = "none";
            btn.textContent = "▼ Mostrar";
        } else {
            content.style.display = "block";
            btn.textContent = "▲ Ocultar";
        }
    });
});

// Botão de light/dark mode
const btnToggle = document.getElementById("toggle-theme");
btnToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        btnToggle.textContent = "🌙 Dark Mode";
    } else {
        btnToggle.textContent = "🌞 Light Mode";
    }
});

// Contador de visitas
let visitCount = localStorage.getItem("visitCount");

// Se não existe, inicializa
if (!visitCount) {
    visitCount = 1;
} else {
    visitCount = parseInt(visitCount) + 1;
}

localStorage.setItem("visitCount", visitCount);

// Exibe no footer
document.getElementById("visit-counter").innerText =
    `Número de visitas nesta página: ${visitCount}`;

