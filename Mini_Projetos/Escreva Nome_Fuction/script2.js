function escrevaNome(nome) {
    return (`Seu nome é ${nome}`)
};

function verificarIdade(nome, idade) {

    if (idade <= 0) {
        console.log('Erro,  Coloque um Número Maior que 0 (Zero)')
    } else if (idade < 18) {
        console.log(`${escrevaNome(nome)}, Você é Menor de Idade`)
    } else if (idade >= 18) {
        console.log(`${escrevaNome(nome)}, Você é Maior de Idade`)
    } else {
        console.log('Erro, Tente Novamente!')
    }

};
verificarIdade('yumy', 20);