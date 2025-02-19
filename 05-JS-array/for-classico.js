const notas = [10, 8.5, 5, 6.5, 8, 7.5];


// primeira expressão: executada apenas uma vez (let indice = 0)
// segunda expressão: condição de execução (indice < notas.length)
// terceira expressão: executada sempre ao final do bloco (indice++)

for (let indice = 0; indice < notas.length; indice++) {
    console.log(indice, notas[indice]);
}