class ValidaCPF {
    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: false,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        }
        );
    }

    verificaSequencia() {
        return this.cpfLimpo.charAt(o).repeat(11) === this.cpfLimpo;
    }

    gerarNovoCpf() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = this.geraDigito(cpfSemDigitos);
    }


    valida() {

        if(!this.cpfLimpo) return false; //verifica se está vazio
        if(typeof cpfLimpo !== 'string') return false; // verificar se é diferente de uma string
        if(this.cpfLimpo,length !== 11) return false; // verificar se o tamanho é diferente de 11
        if(this.verificaSequencia()) return false; // verifica se é o mesmo caractere
        if(!this.gerarNovoCpf()) return false;


        return 'FIM';
    }

}

const validar = new ValidaCPF('123.456.789-09');