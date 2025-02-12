document.addEventListener("DOMContentLoaded", function () {
    // Exibir uma mensagem de boas-vindas
    console.log("Bem-vindo à Loja de Revenda Shopee!");

    // Selecionar todos os botões de compra
    const botoesCompra = document.querySelectorAll(".botao");

    // Adicionar evento de clique a cada botão
    botoesCompra.forEach(botao => {
        botao.addEventListener("click", function (event) {
            event.preventDefault(); // Evita que o link seja seguido imediatamente
            alert("Você será redirecionado para a compra do produto.");
            window.location.href = this.href; // Redirecionar após o alerta
        });
    });
});
