let temperaturaAtual = window.prompt('Temperatura atual: ');
const escalaAtual = window.prompt('Escolha a escala atual F, C ou  K');
const conversao = window.prompt('Escolha a escala a ser convertida F, C ou  K');
let calculo = 0;


if (escalaAtual === 'C' && conversao === 'F') {
    calculo = (temperaturaAtual * 9/5) + 32;
    window.alert(`Celsius para Fahrenheit: ${calculo}°F`)
}else if (escalaAtual === 'C' && conversao === 'K') {
    calculo = (temperaturaAtual * 1) + 273;
    window.alert(`Celsius para Kelvin: ${calculo}°K`)
    window.alert(` ${temperaturaAtual}`)
}else if (escalaAtual === 'F' && conversao === 'C'){
    calculo = (temperaturaAtual - 32) * (5/9)
    window.alert(`Fahrenheit para Celsius: ${calculo}°C`)
}
