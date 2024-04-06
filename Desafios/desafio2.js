function calcularIMC(peso, altura) {
    imc = peso / (altura ** 2);

    if (isNaN(peso) || isNaN(altura)) {
        return 'Utilize entradas válidas no peso e altura'
    } else if (imc < 18.5) {
        return (`IMC: ${imc.toFixed(2)} \nAbaixo do peso`);
    } else if (imc <= 24.9) {
        return (`IMC: ${imc.toFixed(2)} \nPeso normal`);
    }
    else if (imc <= 29.9) {
        return (`IMC: ${imc.toFixed(2)} \nSobrepeso`);
    }
    else if (imc <= 34.9) {
        return (`IMC: ${imc.toFixed(2)} \nObesidade grau I`);
    }
    else if (imc <= 39.9) {
        return (`IMC: ${imc.toFixed(2)} \nObesidade grau II`);
    }
    else {
        return (`IMC: ${imc.toFixed(2)} \nObesidade grau III`);
    }

}
