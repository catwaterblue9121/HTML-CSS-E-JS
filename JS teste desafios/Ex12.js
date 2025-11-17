// Crie o objeto calculadora
let calculadora = {
    somar: function(a, b) {
        return a + b;
    },
    multiplicar: function(a, b) {
        return a * b;
    }
};

// Teste os métodos
let soma = calculadora.somar(3, 4);
let produto = calculadora.multiplicar(3, 4);

console.log("Soma:", soma);
console.log("Produto:", produto);