// Converta esta função para arrow function
function dobrar(numero) {
    return numero * 2;
}

// Arrow function para calcular quadrado
const quadrado = (numero) => numero * numero;

// Use arrow function com map
const numeros = [1, 2, 3, 4];
const dobrados = numeros.map((numeros) => dobrar(numeros));

console.log("Quadrado de 5:", quadrado(5));
console.log("Números dobrados:", dobrados);