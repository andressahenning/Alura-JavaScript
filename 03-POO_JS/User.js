export default class User {
    #nome
    #sobrenome
    #email
    #nascimento
    #role
    #ativo

    constructor(nome, sobrenome, email, nascimento, role, ativo = true) {
        this.#nome = nome,
        this.#sobrenome = sobrenome,
        this.#email = email,
        this.#nascimento = nascimento,
        this.#role = role || "estudante",
        this.#ativo = ativo
    }

    get nome() {
        return `${this.#nome} ${this.#sobrenome}`
    }
    
    get email() {
        return this.#email;
    }
    
    get nascimento() {
        return this.#nascimento;
    }
    
    get role() {
        return this.#role;
    }
    
    get ativo() {
        return this.#ativo;
    }

    set nome(novoNome) {
        if (novoNome === '') {
            throw new Error('formato não válido');
        }
        let [nome, ...sobrenome] = novoNome.split(" ");
        sobrenome = sobrenome.join(' ');
        this.#nome = nome;
        this.#sobrenome = sobrenome
      }

    exibirInfos() {
        if (this.role === "estudante") {
            return `estudante - ${this.nome}`
        }
        return `${this.nome}, ${this.email}`
    }

    static exibirInfosGenericas(nome, email) {
        return `${nome}, ${email}`
    }

}

// Anotações:

/*
Overload - sobrecarga de método/função (não é tão indicado):
 exibirInfos() { // -> 
    if (this.role === "estudante") {
        return `dados estudante: ${this.nome}`;
    }
    if (this.role === "admin") {
        return `dados admin: ${this.nome}, ${this.role}`;
    }
    if (this.role === "docente") {
        return `dados docente: ${this.nome}, ${this.email}`;
    }
} 
*/

/* 
# -> indica um atributo ou método privado;
Exemplo de método privado: 
#montaObjUser() {
    return ({
        nome: this.#nome,
        email: this.#email,
        nascimento: this.#nascimento,
        role: this.#role,
        ativo: this.#ativo,
    })
}

get -> é um tipo especial de método(assessor) que é somente para leitura;
set -> também é um método assessor útil para modificar uma propriedade, para verificar se a informação pode ser alterada, fazer uma autenticação, validação... 
*/

