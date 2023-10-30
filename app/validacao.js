function  verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute

    function chuteForInvalido(numero) {
        elementoChute.innerHTML += '<div>Valor inválido</div>'
    }

        if (numeroForMaiorouMenorQueValorPermitido(numero)) {
            elementoChute.innerHTML += `
            <div>Valor iválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>
            `
        }
}

if (numero == numeroSecreto) {
    document.body.innerHTML = `
    <h2>Você acertou </h2>
    <h3>Onúmero secreto era ${numeroSecreto}</h3>
    `
}

else if (numero > numeroSecreto) {
    elementoChute.innerHTML = `
    <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
    `
}

else{
    elementoChute.innerHTML += `
    <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
    `
}

function numeroForMaiorouMenorQueValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}