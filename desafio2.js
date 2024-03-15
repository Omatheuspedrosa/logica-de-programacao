const altura = window.prompt("Digite sua altura:");
const peso = window.prompt("Digite o seu peso:");
const imc = peso ** altura;

if (imc <= 18.5) {
    window.alert('Abaixo do peso')
}else {
    window.alert('')
}