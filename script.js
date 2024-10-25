document.getElementById("sim").onclick = function() {
    document.getElementById("tela1").style.display = "none";
    document.getElementById("tela2").style.display = "flex"; // Alterado para 'flex' para manter a centralização
};

document.getElementById("nao").onmouseover = function() {
    const caixa = this.parentElement.parentElement; // A caixa que contém os botões
    const caixaRect = caixa.getBoundingClientRect(); // Obtemos a posição da caixa
    const buttonWidth = this.offsetWidth; // Largura do botão
    const buttonHeight = this.offsetHeight; // Altura do botão

    // Gera novas posições que mantenham o botão dentro da caixa
    let randomX = Math.random() * (caixaRect.width - buttonWidth);
    let randomY = Math.random() * (caixaRect.height - buttonHeight);

    // Define as novas posições
    this.style.position = 'absolute';
    this.style.left = `${randomX}px`;
    this.style.top = `${randomY}px`;

    document.addEventListener("DOMContentLoaded", function() {
        const caixaTexto = document.querySelector(".caixa h2");
        let textoOriginal = caixaTexto.innerHTML;
        
        // Divide o texto em um array de palavras
        let palavras = textoOriginal.split(" ");
        
        // Adiciona uma quebra de linha <br> a cada 10 palavras
        for (let i = 10; i < palavras.length; i += 10) {
            palavras[i] = "<br>" + palavras[i];
        }
        
        // Junta o texto com as quebras de linha e atualiza o conteúdo da caixa
        caixaTexto.innerHTML = palavras.join(" ");
    });
};



