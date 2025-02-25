// import estudante from './estudante.json' -> forma mais moderna, precisaria de algumas configurações
const estudante = require('./estudante.json'); // -> forma nativa do nod

console.log(JSON.stringify(estudante));
console.log(typeof estudante);

const chaves = Object.keys(estudante)
console.log(chaves);
