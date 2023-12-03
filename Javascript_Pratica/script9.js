const entradas = [5, 32, 1, 94, 65]
let i = 0;

function gets(){
    const valor = entradas[i]
    i++
    return valor;
}

function print(texto){
    console.log(texto)
}

module.exports = {gets,print}; //funcao exportado


