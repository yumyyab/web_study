// Criar um conversor de quilômetros para anos-luz

function calculate() {
    let numberOne = document.getElementById("PrimaryNum").value

    let resultKM = numberOne * 1.057001e-13
    window.alert(`-> ${numberOne} <- é igual a: ${resultKM}`)
};
