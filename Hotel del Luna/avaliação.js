function pegarDados(){
    let nome = document.getElementById("responsavel").value;
    let comentario = document.getElementById("comentario").value;
    return{nome,comentario};
}
function criar(){
    let tagHr = document.createElement("hr");
    let tagSection = document.createElement("section");
    let tagH3 = document.createElement("h3");
    let tagP = document.createElement("p");
    return{tagHr, tagSection, tagH3, tagP};
}
function estruturar(tags){
    let tagMain = document.querySelector("main");
    tagMain.appendChild(tags.tagHr);
    tagMain.appendChild(tags.tagSection);
    tags.tagSection.appendChild(tags.tagH3);
    tags.tagSection.appendChild(tags.tagP);
}
function adicionar(tags, pegar){
    tags.tagH3.textContent = pegar.nome;
    tags.tagP.textContent = pegar.comentario;
}
function principalAvaliacoes(){
    let botão = document.getElementById("enviar");
    if (botão){
        botão.addEventListener("click", function(event) {
            event.preventDefault(); 
            let pegar = pegarDados(); 
            let tags = criar();  
            if (pegar.nome && pegar.comentario) {
                estruturar(tags);  
                adicionar(tags, pegar);  
            } else {
                alert("Por favor, preencha todos os campos!");
            }
        });
    }
}
document.addEventListener("DOMContentLoaded", principalAvaliacoes);