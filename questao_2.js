function verificaFibonacci(numero) {
    let anterior = 0;
    let atual = 1;

    while (atual <= numero) {
        if (atual === numero) {
            return true; // O número pertence à sequência de Fibonacci
        }
        
        let proximo = anterior + atual;
        anterior = atual;
        atual = proximo;
    }
    
    return false; // O número não pertence à sequência de Fibonacci
}


// Número a ser verificado
const numeroVerificado = 21;

// Verifica se o número pertence à sequência de Fibonacci
if (verificaFibonacci(numeroVerificado)) {
    console.log(numeroVerificado + " pertence à sequência de Fibonacci.");
} else {
    console.log(numeroVerificado + " não pertence à sequência de Fibonacci.");
}
