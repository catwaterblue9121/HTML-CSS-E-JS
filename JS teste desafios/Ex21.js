// String com frutas separadas por vírgula
const frutasString = "maçã,banana,laranja";

// Divida a string em um array
const frutasArray = frutasString.split(",");

// Una o array em uma nova string com " - " como separador
const novaString = frutasArray.join(" - ");

// Exiba os resultados
console.log("String original:", frutasString);
console.log("Array:", frutasArray);
console.log("Nova string:", novaString);
