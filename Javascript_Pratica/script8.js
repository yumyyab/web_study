const alunos = ['ana', 'matheus', 'julio']; //Array

alunos.push('luquinhas'); //Adiciona um novo como último
alunos[0] = 'lucas'; //Adiciona 'lucas' no index [0]

alunos.pop(); //Remove o último
alunos.shift(); //Remove o primeiro

//console.log(alunos);


const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(5);
notas.push(6);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}

const media = soma / notas.length;
console.log(media.toFixed(1));

