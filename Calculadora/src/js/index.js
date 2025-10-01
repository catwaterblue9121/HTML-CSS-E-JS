document.getElementById('calcForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operacao = document.getElementById('operacao').value;
    const resultadoSpan = document.getElementById('resultado');

    let resultado;

    switch (operacao) {
        case 'somar':
            resultado = num1 + num2;
            break;
        case 'subtrair':
            resultado = num1 - num2;
            break;
        case 'multiplicar':
            resultado = num1 * num2;
            break;
        case 'dividir':
            if (num2 === 0) {
                resultadoSpan.textContent = 'Erro: divisão por zero!';
                return;
            }
            resultado = num1 / num2;
            break;
        default:
            resultadoSpan.textContent = 'Operação inválida';
            return;
    }

    resultadoSpan.textContent = resultado;
});