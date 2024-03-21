function calcularIMC(peso, altura) {
    const imc = peso / (altura ** 2);
    let mensagem;

    if (imc < 18.5) {
        mensagem = (`IMC: ${imc.toFixed(2)} \nAbaixo do peso`);
    }else if (imc <= 24.9) {
        mensagem = (`IMC: ${imc.toFixed(2)} \nPeso normal`);
    }
    else if (imc <= 29.9) {
        mensagem = (`IMC: ${imc.toFixed(2)} \nSobrepeso`);
    }
    else if (imc <= 34.9) {
        mensagem = (`IMC: ${imc.toFixed(2)} \nObesidade grau I`);
    }
    else if (imc <= 39.9) {
        mensagem = (`IMC: ${imc.toFixed(2)} \nObesidade grau II`);
    }
    else {
        mensagem = (`IMC: ${imc.toFixed(2)} \nObesidade grau III`);
    }
    
    return mensagem;
}
