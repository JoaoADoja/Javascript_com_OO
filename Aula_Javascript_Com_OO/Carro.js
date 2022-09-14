class Carro{
motor;
#nitro = 'VRUMMMMM (Turbina)';
set motor(motor){
    this.motor = motor
}

get motor(){
    return this.motor
}

    constructor(motor){
        
        this.motor = motor;
        
    }   
    acelerarFusca(){
        return "Fuscão está fazendo : Vrummm....";
    } 
    acelerarLamborguini(){
        return `Lamborguini está fazendo : VRUMMMMMMMMM!!!....${this.#nitro}` ;

    }
    acelerarFerrari(){
        return "Ferrari está fazendo: VRUMMMMM!!...";
    }
}
