let temperaturaAtual = parseFloat(window.prompt('Temperatura atual: '));
if (!isNaN(temperaturaAtual)) {
    const escalaAtual = window.prompt("Escolha a escala atual:\nF - Fahrenheit \nC - Celsius \nK - Kelvin").toUpperCase();
    if (escalaAtual === 'C' || escalaAtual === 'F' || escalaAtual === 'K') {
        const conversao = window.prompt('Escolha a escala a ser convertida: \nF - Fahrenheit \nC - Celsius \nK - Kelvin').toUpperCase();
        if (conversao === 'C' || conversao === 'F' || conversao === 'K') {
            let calculo = 0;

            if (escalaAtual === 'C' && conversao === 'F') {
                calculo = (temperaturaAtual * 9/5) + 32;
                window.alert(`${temperaturaAtual}° Celsius para Fahrenheit: ${calculo.toFixed(2)}°F`)
            }else if (escalaAtual === 'C' && conversao === 'K') {
                calculo = (temperaturaAtual * 1) + 273;
                window.alert(`${temperaturaAtual}° Celsius para Kelvin: ${calculo.toFixed(2)}°K`);
            }else if (escalaAtual === 'F' && conversao === 'C'){
                calculo = (temperaturaAtual - 32) * (5/9);
                window.alert(`${temperaturaAtual}° Fahrenheit para Celsius: ${calculo.toFixed(2)}°C`);
            }else if (escalaAtual === 'F' && conversao === 'K'){
                calculo = ((temperaturaAtual * 1) + 459.67) * 5/9;
                window.alert(`${temperaturaAtual}° Fahrenheit para Kelvin: ${calculo.toFixed(2)}°K`);
            }else if (escalaAtual === 'K' && conversao === 'C'){
                calculo = (temperaturaAtual * 1) - 273.15;
                window.alert(`${temperaturaAtual}° Kelvin para Celsius: ${calculo.toFixed(2)}°C`);
            }else if (escalaAtual === 'K' && conversao === 'F'){
                calculo = (temperaturaAtual * 1) * 9/5 - 459.67;
                window.alert(`${temperaturaAtual}° Kelvin para Fahrenheit: ${calculo.toFixed(2)}°F`);
            }
        }else {
            window.alert('Você digitou uma conversão inválida. Recarregue a página e tente novamente');
        }
        
    }else {
        window.alert('Você digitou uma escala inválida. Recarregue a página e tente novamente');
    }
    
}else {
    window.alert('Você digitou uma temperatura inválida. Recarregue a página e tente novamente');
}
