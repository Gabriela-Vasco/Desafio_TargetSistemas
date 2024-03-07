function inverterString(str) {
    let novaString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        novaString += str[i];
    }
    return novaString;
}

// String a ser invertida
const minhaString = "Olá, mundo!";

// Invertendo a string
const stringInvertida = inverterString(minhaString);

// Imprimindo a string invertida
console.log("String original:", minhaString);
console.log("String invertida:", stringInvertida);
