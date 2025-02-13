import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

// const novoUser = new User("Juliana", "j@j.com", "2024-01-01");
// console.log(novoUser.exibirInfos())

const novoUser = new User('Juliana', 'Souza', 'j@j.com', '2021-01-01');
console.log(novoUser.exibirInfos());

const novoAdmin = new Admin('Rodrigo', 'r@r.com');
console.log(novoAdmin.exibirInfos());

const novaDocente = new Docente('Ana', 'a@a.com', '2024-01-01');
console.log(novaDocente.exibirInfos());

const dadosFicticios = User.exibirInfosGenericas('Cassio', 'c@c.com')
console.log(dadosFicticios);

