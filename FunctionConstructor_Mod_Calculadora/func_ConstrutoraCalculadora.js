function Calculadora(){
    this.display = document.querySelector('.display');
    
    this.cliqueBotoes = () => {
        document.addEventListener('click', event => {
            const el = event.target;

            if(el.classList.contains('btn-num')){
                this.btnParaDisplay(el);
            }

            if(el.classList.contains('btn-clear')){
                this.clearDisplay();
            }

            if(el.classList.contains('btn-del')){
                this.apagaUm();
            }

            if(el.classList.contains('btn-eq')){
                this.calcula();
            }
        });
    };

     this.inicia = () => {
        this.cliqueBotoes();
        this.enter();
    };

    this.enter = () => {
        document.addEventListener('keypress', event => {
            if(event.keyCode === 13){
                this.calcula();
            }
        });
    };

    this.clearDisplay = () => {
        this.display.value = '';
    };

    this.btnParaDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus();
    };

    this.apagaUm = () => {
        this.display.value = this.display.value.slice(0, -1);
    };
    
    this.calcula = () => {
       let conta = this.display.value;

       try {
           conta = eval(conta);

           if(!conta){
               alert('Conta Invalida');

               return
           }
           this.display.value = String(conta);
       } catch (error) {
        alert('Conta Invalida');

        return
       }
    };
}
const calculadora = new Calculadora();
calculadora.inicia();