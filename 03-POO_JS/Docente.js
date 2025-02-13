import User from "./User.js";

export default class Docente extends User {
    constructor(nome, email, nascimento, role = "docente", ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    aprovarEstudante(estudante, curso) {
        return `estudante ${estudante} passou no curso de ${curso}, responsável ${this.nome}.`
    }

    exibirInfos() { // -> OVERRIDE - sobescrita de método
        const infos = super.exibirInfos();
        return `docente - ${infos}`;
    }
}


//Observações:

/*
    Toda classe implicitamente segue o modo estrito:
        O modo estrito do JavaScript serve para impedir que alguns comportamentos da linguagem causem “falhas silenciosas” (ou seja, falhas que
        não resultam em lançamento de erros pelo programa) e corrigir alguns outros que podem induzir bugs potenciais e comportamentos inesperados.
        O modo estrito é uma forma de ajudar a contornar alguns destes comportamentos sem que o código “não estrito” deixe de funcionar. Essa política não se aplica tanto para aplicações back-end que rodam em servidores (em que é possível controlar melhor as versões utilizadas pelo interpretador), mas é extremamente importante nos navegadores, em que o código é interpretado no lado “cliente” da requisição e não há como ter controle sobre as versões de navegador dos usuários.
*/