// menu.js
document.addEventListener("DOMContentLoaded", function () {
    // Carregar o conteúdo do menu
    var menuCabecario = document.getElementById("menuCabecario");

    // Verificar se o contêiner do menu existe na página
    if (menuCabecario) {
        // Carregar o conteúdo do menu.html no contêiner do menu
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "menuCabecario.html", true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                menuCabecario.innerHTML = xhr.responseText;

                // Destacar o item do menu correspondente à página atual
                highlightCurrentPage();
            }
        };
        xhr.send();
    }
});
