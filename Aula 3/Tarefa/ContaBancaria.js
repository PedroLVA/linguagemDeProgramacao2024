class ContaBancaria{
        #saldo;

        constructor(_valorInicial){
            this.#saldo = _valorInicial;
        }

        depositar(_valorDepositado){
            this.#saldo += _valorDepositado;
        }

        sacar(_valorSacado){
            if(_valorSacado <= this.#saldo){
                this.#saldo -= _valorSacado;
            }
            else{
                throw "Saldo insuficiente";
            }
           
        }
        saldoAtual(){
            return "Seu saldo atual é: " + this.#saldo;
        }
}