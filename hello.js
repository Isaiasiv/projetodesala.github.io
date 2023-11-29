// Seleciona o elemento HTML com o ID "switch" e o armazena na variável "chk"
const chk = document.getElementById('switch');

// Adiciona um ouvinte de evento para o evento "change" ao elemento "chk"
chk.addEventListener('change', () => {
    // Seleciona o elemento <body> do documento HTML
    const body = document.body;

    // Usa o método "classList.toggle()" para alternar a classe "dark" no elemento <body>
    // Se a classe "dark" estiver presente, ela será removida. Se não estiver presente, será adicionada.
    body.classList.toggle('dark');

    // Seleciona a classe "color_txt"
    const color_txt = document.querySelector('.color_txt');

    // Usa o método "classList.toggle()" para alternar a classe "txt_azul" na classe "color_txt"
    color_txt.classList.toggle('txt_azul');
});

let musica = document.querySelector('audio');

document.querySelector('.botao-play').addEventListener('click', tocarMusica);
function tocarMusica (){
    musica.play();
    document.querySelector('.botaoPause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}