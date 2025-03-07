if (document.querySelector("form")) {
    document.querySelector("form").addEventListener("submit", function(e) {
        e.preventDefault();  

        const nome = document.getElementById("responsavel").value;
        const contato = document.getElementById("contato").value;
        const criancas = document.getElementById("criancas").value;
        const adultos = document.getElementById("adultos").value;
        const checkin = document.getElementById("check-in").value;
        const checkout = document.getElementById("check-out").value;

        localStorage.setItem("nome", nome);
        localStorage.setItem("contato", contato);
        localStorage.setItem("criancas", criancas);
        localStorage.setItem("adultos", adultos);
        localStorage.setItem("checkin", checkin);
        localStorage.setItem("checkout", checkout);

        window.location.href = "comprovante.html";
    });
}

if (document.querySelector("main h2")) {
    window.onload = function() {
        
        const nome = localStorage.getItem("nome");
        const contato = localStorage.getItem("contato");
        const criancas = localStorage.getItem("criancas");
        const adultos = localStorage.getItem("adultos");
        const checkin = localStorage.getItem("checkin");
        const checkout = localStorage.getItem("checkout");


        document.getElementById("nome").textContent = nome;
        document.getElementById("random").textContent = Math.floor(Math.random() * 10000); 
        document.getElementById("checkin").textContent = checkin;
        document.getElementById("checkout").textContent = checkout;
        document.getElementById("pessoas").textContent = `Adultos: ${adultos}, Crianças: ${criancas}`;
    };
}
