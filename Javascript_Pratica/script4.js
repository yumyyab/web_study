// Função = Verbo + Substantivo
let corSite = "Azul";

function resetaCor(cor, tonalidade){
    corSite = cor + " " + tonalidade;
}

// console.log(corSite);
 resetaCor("Vermelho", "escuro");
// console.log(corSite);


// Tipos de Função
// 1 - Realiza uma tarefa, não devolve nada
function dizerNome(){
    console.log('yumy');
}
dizerNome();

// 2 - Realiza uma tarefa e me retorna um resultado
function MultiplicarPorDois(valor){
    return valor * 2;
}
// console.log(MultiplicarPorDois(5)); // Com Print ou-                       
let resultado = MultiplicarPorDois(10); // Por uma variavel
console.log(resultado);

