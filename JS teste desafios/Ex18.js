// Array de números
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filtre apenas números pares
const pares = numeros.filter(num => num % 2 === 0);

// Array de produtos
const produtos = [
    { nome: "Notebook", preco: 2500, categoria: "eletrônicos" },
    { nome: "Camisa", preco: 80, categoria: "roupas" },
    { nome: "Mouse", preco: 50, categoria: "eletrônicos" },
    { nome: "Calça", preco: 120, categoria: "roupas" }
];

// Filtre produtos eletrônicos com preço menor que 100
const eletronicosBaratos = produtos.filter(produto => produto.categoria === "eletrônicos" && produto.preco < 100);

console.log("Números pares:", pares);
console.log("Eletrônicos baratos:", eletronicosBaratos);
