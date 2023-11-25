/* - Operadores Aritméticos(matemáticos) -
 + - * / ** */
let salario = 10;
console.log(salario + salario);
console.log(salario - salario);
console.log(salario * salario);
console.log(salario / salario);
console.log(salario ** salario);


// - Operadores Atribuição -
let idade = 18;
let idade1 = 18;
console.log(++idade);
console.log(--idade1);


// - Operadores de Comparação -
let valorTeclado = 100;
valorTeclado += valorTeclado // (valorTeclado = valorTeclado + valorTeclado)
console.log(valorTeclado)


// - Operadores de Igualdade -
console.log(1 === 1);
console.log('1' === 1); // === compara o 'tipo' e os valores


// - Operador Ternário -
let pontos = 160;
let tipo = pontos > 100 ? 'premium' : 'comum';
console.log(tipo)


// - Operadores Lógicos -
// && (Retorna TRUE se os dois for verdadeiro) 
let maiorDeIdade = true;
let possuiCarteiraDeMotorista = true;
let podeAplicar1 = maiorDeIdade && possuiCarteiraDeMotorista;
console.log(podeAplicar1)
//|| (Retorna TRUE se um for verdadeiro)
let maiorDeIdade0 = false;
let possuiCarteiraDeMotorista0 = true;
let podeAplicar0 = maiorDeIdade0 || possuiCarteiraDeMotorista0;
console.log(podeAplicar);
// ! (Retorna FALSE quando definido)
let podeAplicar = true;
let candidato = !podeAplicar;
console.log(candidato)