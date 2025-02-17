import { Cliente } from "./cliente.js";
import { Conta } from "./conta.js";
import { ContaCorrente } from "./contaCorrente.js";

const cliente1 = new Cliente("Ricardo", 11122233304);
const cliente2 = new Cliente("Alice", 44455566607);

const conta1 = new Conta(0, cliente1, 1001);
const conta2 = new Conta(0, cliente2, 1002);

conta1.depositar(500);
conta1.transferir(200, conta2);

console.log(JSON.stringify(Conta.numeroDeContas));
console.log(JSON.stringify(conta1));
console.log(JSON.stringify(conta2));


const contaPoupanca = new Conta(50, cliente1, 1001)
console.log(JSON.stringify(contaPoupanca))