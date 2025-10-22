class ValidaCPF {
    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: false,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')// utiliza uma expressão regular para limpar os dígitos
        }
        );
    }

    verificaSequencia() {
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo; // verifica se a string toda é igual
    }

    gerarNovoCpf() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2); // retorna uma string sem os últimos 2 digitos
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos); // chama a função que calcula o 1 digito
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1); // chama a função para calcular o segundo digito
        this.novoCpf = cpfSemDigitos + digito1 + digito2; //concatena o cpf sem digito com os 2 digitos
    }

    static geraDigito(cpfSemDigitos) { //passa o cpf sem digitos e depois com 1 digito para serem calculados
        let total = 0;
        let reverso = cpfSemDigitos.length + 1; // faz o calculo de 10 a 2 e depois 11 a 2

        for(let stringNum of cpfSemDigitos) {
            total += reverso * Number(stringNum);
            reverso --;
        }

        const digito = 11 - (total % 11); // calcula 11 - o resto da divisao do total

        return digito <= 9 ? String(digito) : '0'; //se o valor for menor que 10 o valor é o digito se for 10 ou 11 é 0

    }


    valida() {

        if(!this.cpfLimpo) return false; //verifica se está vazio
        if(typeof this.cpfLimpo !== 'string') return false; // verificar se é diferente de uma string
        if(this.cpfLimpo.length !== 11) return false; // verificar se o tamanho é diferente de 11
        if(this.verificaSequencia()) return false; // verifica se é o mesmo caractere
        this.gerarNovoCpf();
        

        return this.novoCpf === this.cpfLimpo;
    }

}

/*const validar = new ValidaCPF('123.456.789-09');

if(validar.valida()){
    console.log('CPF VÁLIDO');
} else {
    console.log('CPF inválido');
}*/