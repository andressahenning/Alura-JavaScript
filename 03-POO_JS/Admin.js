import User from "./User.js";

export default class Admin extends User {
    constructor(nome, email, role = "admin", ativo = true) {
        super(nome, email, role, ativo) // -> superclasse de admin é user, onde a classe está herdando o que ela precisa da classe user
    }

    criarCurso(nomeCurso, qdtVagas) {
        return `curso ${nomeCurso} criado com ${qdtVagas} vagas.`
    }

    exibirInfos() { // -> OVERRIDE - sobescrita de método
        const infos = super.exibirInfos();
        return `admin - ${infos}`;
    }
}
