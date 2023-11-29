// menu.js
document.addEventListener("DOMContentLoaded", function () {
    // Carregar o conteúdo do menu
    var slideCon = document.getElementById("slideCon");

    // Verificar se o contêiner do menu existe na página
    if (slideCon) {
        // Carregar o conteúdo do menu.html no contêiner do menu
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "slide.html", true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                slideCon.innerHTML = xhr.responseText;

                // Destacar o item do menu correspondente à página atual
                highlightCurrentPage();
            }
        };
        xhr.send();
    }
});
