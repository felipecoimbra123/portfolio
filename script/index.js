function revealOnScroll() {
    const elements = document.querySelectorAll(".reveal");

    elements.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const visiblePoint = 120;

        if (elementTop < windowHeight - visiblePoint) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

async function carregarProjetos() {
    const usuario = "SEU_USUARIO_GITHUB";
    const url = `https://api.github.com/users/${usuario}/repos`;

    const resposta = await fetch(url);
    const repos = await resposta.json();

    const container = document.getElementById("repos");

    repos.forEach(repo => {
        const card = document.createElement("div");
        card.classList.add("repo-card");

        card.innerHTML = `
            <h2>${repo.name}</h2>
            <p>${repo.description || "Sem descrição disponível 😊"}</p>

            <a href="${repo.html_url}" target="_blank">
                Ver no GitHub →
            </a>
        `;

        container.appendChild(card);
    });
}

carregarProjetos();
