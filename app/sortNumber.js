const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}

console.log(`O número secreto é ${numeroSecreto}`);

const elMenorValor = document.getElementById('menor-valor')
elMenorValor.innerHTML = menorValor

const elMaiorValor = document.getElementById('maior-valor')
elMaiorValor.innerHTML = maiorValor