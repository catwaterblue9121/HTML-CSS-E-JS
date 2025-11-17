// Função com parâmetros padrão
function saudar(nome = "Visitante", idade = 18) {
    return `Olá ${nome}, você tem ${idade} anos`;
}

// Arrow function com parâmetro padrão
const calcularDesconto = (preco, desconto = 10) => {
    return preco - (preco * desconto / 100);
};

// Teste as funções
console.log(saudar());                 // Olá Visitante, você tem 25 anos
console.log(saudar("Ana"));            // Olá Ana, você tem 25 anos
console.log(saudar("Carlos", 30));     // Olá Carlos, você tem 30 anos
console.log("Preço com desconto:", calcularDesconto(100));  // Preço com desconto: 90
