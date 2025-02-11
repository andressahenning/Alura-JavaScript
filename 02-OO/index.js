import { Cliente } from "./cliente.js";
import { ContaCorrente } from "./contaCorrente.js";

const cliente1 = new Cliente("Ricardo", 11122233304);
const cliente2 = new Cliente("Alice", 44455566607);

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);

contaCorrenteRicardo.depositar(500);
const conta2 = new ContaCorrente(cliente2, 1002);

contaCorrenteRicardo.transferir(200, conta2);

console.log(JSON.stringify(ContaCorrente.numeroDeContas))