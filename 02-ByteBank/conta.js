export class Conta {
    _saldo

    constructor(tipo, saldoInicial, cliente, agencia) {
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    set cliente(novoValor){
            if(novoValor instanceof Cliente) {
                this.cliente = novoValor;
            } else {
                console.warn("O valor atribuído não é uma instância de Cliente!");
            }
        }
    
        get cliente(){
            return this.cliente;
        }
    
        get saldo(){
            return this._saldo;
        }

    sacar(valor) {
        let = taxa = 1;
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
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