const user = {
    nome: 'Juliana',
    email: 'j@j.com',
    nascimento: '1995-02-15',
    role: 'estudante',
    ativo: true,

    exibirInfos: function() {
        console.log(this.nome, this.email);
    }
}

const admin = {
    nome: 'Mariana',
    email: 'm@m.com',
    nascimento: '1987-05-18',
    role: 'admin',
    ativo: true,

    criarCurso: function() {
        console.log("curso criado");
    }
}

Object.setPrototypeOf(admin, user) // -> Herança de protótipo, cadeia de protótipo
admin.criarCurso()
admin.exibirInfos()