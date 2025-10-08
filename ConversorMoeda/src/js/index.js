const taxas = {
    USD: { BRL: 5.0, EUR: 0.85 },
    BRL: { USD: 1 / 5.0, EUR: 0.85 / 5.0 },
    EUR: { BRL: 5.0 / 0.85, USD: 1 / 0.85 },
};

function converter() {
    const valorInput = document.getElementById("inputValue").value.trim();
    const deMoeda = document.getElementById("fromCurrency").value;
    const paraMoeda = document.getElementById("toCurrency").value;
    const resultDiv = document.getElementById("result");

    if (deMoeda === paraMoeda) {
        resultDiv.innerText = "Selecione moedas diferentes.";
        return;
    }

    const valor = parseFloat(valorInput.replace(',', '.'));
    if (isNaN(valor)) {
        resultDiv.innerText = "Por favor, insira um número válido.";
        return;
    }

    const taxa = taxas[deMoeda][paraMoeda];
    const convertido = valor * taxa;

    const formatado = convertido.toLocaleString('pt-BR', {
        style: 'currency',
        currency: paraMoeda
    });

    resultDiv.innerText = `Valor Convertido: ${formatado}`;
}
