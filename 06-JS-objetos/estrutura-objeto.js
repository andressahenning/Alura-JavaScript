const estudante = {
    nome: 'João Silva',
    idadde: 32,
    cpf: '12345678910',
    turma: 'JavaScript'
}

console.log(estudante.nome);
console.log(`o nome do estudante é ${estudante.nome}`);
console.log(`os três primeiros números do CPF são: ${estudante.cpf.substring(0, 3)}`);