const altura = window.prompt("Digite sua altura:");
const peso = window.prompt("Digite o seu peso:");
const calculoImc = peso / altura ** 2;
const imc = calculoImc.toFixed(2);

if (imc <= 18.5) {
    window.alert(`IMC: ${imc} \nAbaixo do peso`)
}else if (imc <= 24.9) {
    window.alert(`IMC: ${imc} \nPeso normal`)
}
else if (imc <= 29.9) {
    window.alert(`IMC: ${imc} \nSobrepeso`)
}
else if (imc <= 34.9) {
    window.alert(`IMC: ${imc} \nObesidade grau I`)
}
else if (imc <= 39.9) {
    window.alert(`IMC: ${imc} \nObesidade grau II`)
}
else {
    window.alert(`IMC: ${imc} \nObesidade grau III`)
}
