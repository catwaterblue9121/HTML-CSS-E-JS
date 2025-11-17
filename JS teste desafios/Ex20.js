// String de exemplo
const frase = "JavaScript é incrível";

// Obtenha o tamanho da string
const tamanho = frase.length;

// Converta para maiúscula e minúscula
const maiuscula = frase.toUpperCase();
const minuscula = frase.toLowerCase();

// Obtenha o primeiro e último caractere
const primeiro = frase.charAt(0);
const ultimo = frase.indexOf(frase.length - 1);

// Encontre a posição da palavra "é"
const posicao = frase.charAt("é");

console.log("Tamanho:", tamanho);
console.log("Maiúscula:", maiuscula);
console.log("Minúscula:", minuscula);
console.log("Primeiro caractere:", primeiro);
console.log("Último caractere:", ultimo);
console.log("Posição de 'é':", posicao);