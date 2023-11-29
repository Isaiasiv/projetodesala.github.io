// menu.js

// Espera o carregamento completo do DOM antes de executar o código interno
document.addEventListener("DOMContentLoaded", function () {

    // Obtém a referência ao elemento HTML com o ID "menuCabecario"
    var menuCabecario = document.getElementById("menuCabecario");

    // Verifica se o contêiner do menu existe na página
    if (menuCabecario) {

        // Cria um objeto XMLHttpRequest para fazer requisições HTTP assíncronas
        var xhr = new XMLHttpRequest();

        // Abre uma conexão para obter o conteúdo do arquivo "menuCabecario.html"
        xhr.open("GET", "menuCabecario.html", true);

        // Define uma função a ser chamada sempre que o estado da requisição mudar
        xhr.onreadystatechange = function () {
            // Verifica se a requisição foi concluída e bem-sucedida
            if (xhr.readyState == 4 && xhr.status == 200) {

                // Atualiza o conteúdo do elemento "menuCabecario" com o conteúdo obtido do arquivo HTML
                menuCabecario.innerHTML = xhr.responseText;

                // Chama a função para destacar o item do menu correspondente à página atual
                highlightCurrentPage();
            }
        };

        // Envia a requisição para obter o conteúdo do arquivo HTML
        xhr.send();
    }
});
