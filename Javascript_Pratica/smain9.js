const { gets, print } = require('./script9') //funcao importado, conceito 'destructuring'

//console.log(funcoes.gets()) -> {gets,print}

const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    numerosSorteados.push(numeroSorteado)
};

let maiorNumero = 0;

for (let i = 0; i < numerosSorteados.length; i++) {
    const numero = numerosSorteados[i];
    if (numero > maiorNumero){
    maiorNumero = numero;
    }
};
// print(numerosSorteados)
// print(maiorNumero);



const quantidadeDeAlunos = gets();
let maiorValor = 0;

for (let i = 0; i < quantidadeDeAlunos; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValor){
        maiorValor = numeroSorteado
    } 
}
print(maiorValor)