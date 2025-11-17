// Array de números
const numeros = [1, 2, 3, 4, 5];

// Use map para criar array com números ao quadrado
const quadrados = numeros.map(num => num * num);

// Array de objetos
const pessoas = [
    { nome: "Ana", idade: 25 },
    { nome: "João", idade: 30 },
    { nome: "Maria", idade: 28 }
];

// Use map para extrair apenas os nomes
const nomes = pessoas.map(pessoa => pessoa.nome);

console.log("Quadrados:", quadrados);
console.log("Nomes:", nomes);