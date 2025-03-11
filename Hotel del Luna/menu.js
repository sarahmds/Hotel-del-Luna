document.addEventListener('DOMContentLoaded', function() {
    // Selecione o botão que irá disparar a ação
    let botao = document.getElementById("menu");

    if (botao) {
        // Adiciona um evento de clique no botão
        botao.addEventListener('click', function() {
            // Seleciona o menu de navegação
            const nav = document.querySelector("nav");

            // Se o menu ainda não foi criado, cria o menu
            if (!nav) {
                // Criação do menu com os links
                const links = [
                    { href: "sobrenos.html", text: "sobre nós" },
                    { href: "servicos.html", text: "serviços" },
                    { href: "acomodacoes.html", text: "acomodações" },
                    { href: "avaliacoes.html", text: "avaliações" },
                    { href: "reservar.html", text: "reservar" }
                ];

                const tagNav = document.createElement("nav");
                const tagOl = document.createElement("ol");

                tagNav.style.display = "none";


                tagNav.appendChild(tagOl);

                // Encontrar o header e adicionar o menu
                const tagHeader = document.querySelector("header div");
                tagHeader.appendChild(tagNav);

                // Criar os itens de lista no menu
                links.forEach(link => {
                    const tagLi = document.createElement("li");
                    const tagA = document.createElement("a");
                    tagA.href = link.href;
                    tagA.textContent = link.text;
                    tagLi.appendChild(tagA);
                    tagOl.appendChild(tagLi);
                });
            }

            // Agora que o menu foi criado, vamos alternar a visibilidade
            const menu = document.querySelector("nav");
            if (menu.style.display === "none" || menu.style.display === "") {
                menu.style.display = "block";
            } else {
                menu.style.display = "none"; // Esconde o menu
            }
        });
    } else {
        console.log("Botão não encontrado!");
    }
});

