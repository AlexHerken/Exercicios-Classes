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

    

    valida() {

        if(!this.cpfLimpo) return false;

        if(typeof cpfLimpo !== 'string') return false;

        if(this.cpfLimpo,length !== 11) return false;

        return;
    }

}

const validar = new ValidaCPF('123.456.789-09');