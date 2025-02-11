import { Cliente } from "./cliente.js";

export class ContaCorrente {
    // ATRIBUTOS (propriedades)
    static numeroDeContas = 0;
    agencia;
    _cliente;
    _saldo = 0;



    // ACESSORES / Accessors

    set cliente(novoValor){
        if(novoValor instanceof Cliente) {
            this._cliente = novoValor;
        } else {
            console.warn("O valor atribuído não é uma instância de Cliente!");
        }
    } // -> SET: Define o valor de uma propriedade

    get cliente(){
        return this._cliente;
    } // -> GET: Recupera o valor de uma propriedade

    get saldo(){
        return this._saldo
    }

    constructor(cliente, agencia){
        this.cliente = cliente;
        this.agencia = agencia;
        ContaCorrente.numeroDeContas += 1;
    }



    // MÉTODOS (funções)

    sacar(valor) {
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if(valor <= 0){
            return
        }
        this._saldo += valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}