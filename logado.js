document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var userEmail = document.getElementById("userEmail").value;
    var senha = document.getElementById("senha").value;

if (userEmail === "admin@admin" && senha === "admin") {
    alert("Bem vindo!");
    
} else {
    alert("Email ou senha inválidos");
}
    });