
let retiradaInput = document.getElementById("vretirada");
let depositoInput = document.getElementById("vdepositar");

let saldo = 10000;
let Nsaldo;
let span = document.getElementById("text");

function Vretirada() {
    let retirada = parseFloat(retiradaInput.value);
    let retir_input = document.getElementById("retiradaD");

    if (retirada <= saldo) {
        Nsaldo = saldo - retirada;
        span.textContent = "Seu saldo novo é: R$ " + Nsaldo;
        retir_input.classList.add("retir_input");
    } else {
        alert("Saldo insuficiente para realizar a retirada.");
    }
}

function Vdeposito() {
    let deposito = parseFloat(depositoInput.value);
    let retir_input = document.getElementById("depositoD");

    if (deposito > 0) {
        Nsaldo = saldo + deposito;
        span.textContent = "Seu novo saldo é: R$ " + Nsaldo;
        retir_input.classList.add("retir_input");
    } else {
        alert("Valor de depósito inválido.");
    }
}

function Bretirada() {
    let retir_botoes = document.getElementById("botoes");
    let retir_input = document.getElementById("depositoD");
    let retir_claas = document.getElementById("remover");

    retir_botoes.classList.add("Rbotoes");
    retir_input.classList.add("retir_input");
    retir_claas.classList.remove("abaixoDbotoes");

}

function Bdeposito() {
    let retir_botoes = document.getElementById("botoes");
    let retir_input = document.getElementById("retiradaD");
    let retir_claas = document.getElementById("remover");

    retir_botoes.classList.add("Rbotoes");
    retir_input.classList.add("retir_input");
    retir_claas.classList.remove("abaixoDbotoes");
}

function consulta() {
    let retir_botoes = document.getElementById("botoes");

    retir_botoes.classList.add("Rbotoes");
    span.textContent = "Seu saldo é: R$" + saldo;
}
