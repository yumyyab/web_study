class Pessoa { //classe (Esboço)
    nome;
    idade;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.descrever();
    }

    descrever(){
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos`)
    }
}


/* const yumy = new Pessoa(); //instancia da classe (Resultado)
yumy.nome = 'yumy';
yumy.idade = 18;
yumy.descrever(); */

// Com constructor
const yumy = new Pessoa('yumy', 18);




