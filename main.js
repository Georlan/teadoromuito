
function sim() {
    // Exibe uma mensagem e o coração
    alert("Eu gosto muito de você, nada é mentira, nunca foi um incômodo, não importa quantas vezes você diga que não nasceu ontem. ❤️");
    document.getElementById('conteudo').style.display = 'none'; // Esconde o conteúdo
    document.getElementById('heart').style.display = 'block'; // Exibe o coração
    initHeart(); // Inicia a animação do coração
}

function desvia(btn) {
    // Faz o botão "NÃO" se mover
    btn.style.position = 'absolute';
    btn.style.bottom = geraPosicao(10, 90);
    btn.style.left = geraPosicao(10, 90);
    console.log('opa, desviei...');
}

function geraPosicao(min, max) {
    // Gera uma posição aleatória entre min e max
    return (Math.random() * (max - min) + min) + "%";
}
