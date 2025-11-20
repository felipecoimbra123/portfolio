async function loadRepos() {
    const reposContainer = document.getElementById("repos");

    const projetos = [
        {
            name: "Social Picture",
            description: "Aplicação para o enfrentamento da desvalorização da arte fotográfica no Brasil",
            url: "https://github.com/felipecoimbra123/projeto-profissional",
            langs: ["html", "css", "javascript"]
        }
    ];

    const iconMap = {
        html: `<i class="devicon-html5-plain colored"></i>`,
        css: `<i class="devicon-css3-plain colored"></i>`,
        javascript: `<i class="devicon-javascript-plain colored"></i>`,
        node: `<i class="devicon-nodejs-plain colored"></i>`,
        express: `<i class="devicon-express-original"></i>`
    };

    projetos.forEach(proj => {
        const card = document.createElement("div");
        card.classList.add("card");

        const icons = proj.langs
            .map(lang => iconMap[lang] || "")
            .join(" ");

        card.innerHTML = `
            <h2>${proj.name}</h2>
            <p>${proj.description}</p>

            <div class="card-footer">
                <div class="langs">
                    ${icons}
                </div>

                <a href="${proj.url}" target="_blank">Ver projeto</a>
            </div>
        `;

        reposContainer.appendChild(card);
    });
}

loadRepos();
