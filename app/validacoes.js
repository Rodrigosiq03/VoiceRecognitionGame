function verificarChute(chute) {
    const num = +chute

    if (chute.toUpperCase() === 'GAME OVER') {
        document.body.innerHTML = `
            <div id="game-over">
                <h1>GAME OVER</h1>
                <button id="try-again" class="btn-jogar">Jogar Novamente</button>
            </div>
        `
    }
    if ( numInvalido(num) ) {
        elementoChute.innerHTML +='<div>Chute invalido!</div>';
        return
    }
    if ( numMaiorMenorQueOPermitido(num) ) {
        elementoChute.innerHTML += `<div>ERRO: O valor precisa estar entre ${menorValor} e ${maiorValor} </div>`;
        return
    }

    if (num === numeroSecreto) {
        document.body.innerHTML = `
            <h2>VOCÊ ACERTOU!!!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <button id="try-again" class="btn-jogar">Jogar Novamente</button>
        `
    } else if ( num > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-sharp fa-solid fa-arrow-down"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-sharp fa-solid fa-arrow-up"></i></div>
        `
    }
}

function numInvalido(num) {
    return Number.isNaN(num);
}
function numMaiorMenorQueOPermitido(num) {
    return num > maiorValor || num < menorValor 
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'try-again') {
        window.location.reload()
    }
})