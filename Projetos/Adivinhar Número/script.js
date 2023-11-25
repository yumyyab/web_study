
function jogar() {
    let tentativasRestantes = definirTentativas();
    let numeroAleatorio = Math.floor(Math.random() * 1000) + 1;
    // let numeroAleatorio = 20
    adivinhar(numeroAleatorio, tentativasRestantes);
}

function definirTentativas() {
    let tentativaDefinida = prompt('Quantas Tentativas Você Gostaria de Ter?')

    // if (tentativasDefinidas !== null && tentativasDefinidas !== '' && !isNaN(tentativasDefinidas) && tentativasDefinidas > 0) {
    //     alert(`Foram alocadas ${tentativasDefinidas} tentativas!`);
    while (tentativaDefinida > 0) {
        if (tentativaDefinida >= 50 && tentativaDefinida <= 99) {
            alert('Acho que não tem problema roubar, já que não temos regras');
        }
        else if (tentativaDefinida >= 100) {
            alert('Talvez você tenha exagerado só um poquinho mas tudo bem');
        }
        alert(`Foram alocados ${tentativaDefinida} tentativas!`)
        return tentativaDefinida;
    }

    if (tentativaDefinida <= 0) {
        alert('Por favor escreva um valor maior que 0');
    }
}

function adivinhar(numeroAleatorio, tentativasRestantes) {
    while (tentativasRestantes > 0) {
        chute = prompt(`Tente adivinhar o número.\nVocê ainda tem ${tentativasRestantes} tentativas.`);
        if (chute == numeroAleatorio) {
            alert("Parabéns Você Acertou!")
            break;
        }
        else if (chute > numeroAleatorio) {
            alert("Errou.. O Número é Menor")
        }
        else {
            alert("Errou.. O Número é Maior")
        }
        tentativasRestantes--;
    }

    if (tentativasRestantes === 0) {
        alert(`Você Perdeu :(\nO Número Correto era ${numeroAleatorio}`)
    }

}



