// Array de números
const numeros = [1, 2, 3, 4, 5];

// Use reduce para somar todos os números
const soma = numeros.reduce((acumulador, atual) => acumulador + atual, 0);

// Array de idades
const idades = [25, 30, 18, 45, 22, 35];

// Use reduce para encontrar a maior idade
const maiorIdade = idades.reduce((maior, atual) => (atual > maior ? atual : maior), 0);

// Array de frutas
const frutas = ["maçã", "banana", "maçã", "laranja", "banana", "maçã"];

// Use reduce para contar ocorrências
const contagem = frutas.reduce((contador, fruta) => {
    contador[fruta] = (contador[fruta] || 0) + 1;
    return contador;
}, {});

console.log("Soma:", soma);
console.log("Maior idade:", maiorIdade);
console.log("Contagem:", contagem);
