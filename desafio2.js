function calcularIMC() {
const 
altura = window.prompt("Digite sua altura:"),
peso = window.prompt("Digite o seu peso:"),
imc = peso / altura ** 2;

if (imc < 18.5) {
    window.alert(`IMC: ${imc.toFixed(2)} \nAbaixo do peso`)
}else if (imc <= 24.9) {
    window.alert(`IMC: ${imc.toFixed(2)} \nPeso normal`)
}
else if (imc <= 29.9) {
    window.alert(`IMC: ${imc.toFixed(2)} \nSobrepeso`)
}
else if (imc <= 34.9) {
    window.alert(`IMC: ${imc.toFixed(2)} \nObesidade grau I`)
}
else if (imc <= 39.9) {
    window.alert(`IMC: ${imc.toFixed(2)} \nObesidade grau II`)
}
else {
    window.alert(`IMC: ${imc.toFixed(2)} \nObesidade grau III`)
}
}
