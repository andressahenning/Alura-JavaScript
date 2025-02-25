const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['551199999998', '551199999993'],
    endereco: [{
        rua: 'Rua Joseph Climber',
        numero: '45',
        complemento: 'apto 43'
    },
    {
        rua: 'Rua Joseph Climber',
        numero: '45',
        complemento: 'apto 43'
    }]
}

function exibirTelefones(telefone1, telefone2) {
    console.log(`Ligar para ${telefone1}`);
    console.log(`Ligar para ${telefone2}`);    
}

// exibirTelefones(estudante.telefones[0], estudante.telefones[1]);
exibirTelefones(...estudante.telefones)

// ... -> spread operator (operador de espalhamento no parâmetro)

const dadosEnvio = {
    destinatorio: estudante.nome,
    ...estudante.endereco[0]
};

console.log(dadosEnvio);
