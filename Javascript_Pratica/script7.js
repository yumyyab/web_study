const pessoa = { // Conjunto de Chaves {nome,idade} e Valores 'yumy', 18
    nome: 'yumy',
    idade: 18,
};

pessoa.altura = 1.59 //incremeto de Chave e Valor
delete pessoa.nome; // deleta Chave
console.log(pessoa) // print Chaves


 const pessoa1 = { // Conjunto de Chaves {nome,idade} e Valores 'yumy', 18
    nome: 'yumy',
    idade: 18,

    descrever: function() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos`)
    }
};
/* pessoa1.descrever() */

pessoa1.descrever = function() {
    console.log(`Sobreescrevendo o Console anterior!`)
}
/* pessoa1.descrever() */

const atributo = (pessoa1['idade']) //Atributo que faz print de uma chave pessoa
console.log(atributo)
