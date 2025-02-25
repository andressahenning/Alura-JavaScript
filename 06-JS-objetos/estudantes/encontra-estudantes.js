const estudantes = require('./estudantes.json');

function buscaInformacao(lista, chave, valor) {
    return lista.find((estudante) => estudante[chave].includes(valor));
}

const estudanteEncontrado = buscaInformacao(estudantes, 'nome', 'Juliet');
console.log(JSON.stringify(estudanteEncontrado));

const telefoneEstudante = buscaInformacao(estudantes, 'telefone', '2492442110');
console.log(JSON.stringify(telefoneEstudante));
