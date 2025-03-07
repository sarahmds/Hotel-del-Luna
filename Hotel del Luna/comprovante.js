function pegarInformacoes(){

    let nomeForm = document.getElementById("responsavel").value;
    let contatoForm = document.getElementById("contato").value;
    let criancasForm = document.getElementById("criancas").value;
    let checkinForm = document.getElementById("check-in").value;
    let adultosForm = document.getElementById("adultos").value;
    let checkoutForm = document.getElementById("check-out").value;
    let observacaoForm = document.getElementById("observação").value;
    return{nomeForm, contatoForm, criancasForm, checkinForm, adultosForm, checkoutForm, observacaoForm}
}
function substituirComprovante(formulario){
    let nome = document.getElementById("nome").textContent = formulario.nomeForm;
    let random = document.getElementById("random").textContent = Math.floor(Math.random() * 1000000);
    let checkin = document.getElementById("checkin").textContent = formulario.checkinForm;
    let checkout = document.getElementById("checkout").textContent = formulario.checkoutForm;
    let pessoas = document.getElementById("pessoas").textContent = formulario.criancasForm + formulario.adultosForm;
    return{nome, random, checkin, checkout, pessoas};
}
function principalComprovante(){
    let botao = document.getElementById("reservar");
    if (botao){
        botao.addEventListener("click", function(event) {
            event.preventDefault();
            let formulario = pegarInformacoes();  
            if (formulario.nomeForm && formulario.contatoForm && formulario.criancasForm && formulario.checkinForm && formulario.adultosForm && formulario.checkoutForm) {
                substituirComprovante(formulario);  
                sessionStorage.setItem("nome", formulario.nomeForm);
                sessionStorage.setItem("random", Math.floor(Math.random() * 1000000));  
                sessionStorage.setItem("checkin", formulario.checkinForm);
                sessionStorage.setItem("checkout", formulario.checkoutForm);
                sessionStorage.setItem("pessoas", formulario.adultosForm + formulario.criancasForm);

                window.location.assign("comprovante.html");  
            } else {
                alert("Por favor, preencha todos os campos!");
            }
        });
    }
}
window.onload = function() {
    // Recupera os dados do sessionStorage
    let nome = sessionStorage.getItem("nome");
    let random = sessionStorage.getItem("random");
    let checkin = sessionStorage.getItem("checkin");
    let checkout = sessionStorage.getItem("checkout");
    let pessoas = sessionStorage.getItem("pessoas");

    // Preenche os campos com os valores armazenados
    if (nome && random && checkin && checkout && pessoas) {
        document.getElementById("nome").textContent = nome;
        document.getElementById("random").textContent = random;
        document.getElementById("checkin").textContent = checkin;
        document.getElementById("checkout").textContent = checkout;
        document.getElementById("pessoas").textContent = pessoas;
    } else {
        alert("Erro ao carregar os dados da reserva.");
    }
};

document.addEventListener("DOMContentLoaded", principalComprovante);
