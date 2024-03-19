function calcularImc() {
    const pegarPeso = parseFloat(document.getElementById('peso').value); 
    const pegarAltura = parseFloat(document.getElementById('altura').value); 
    const calculo = pegarPeso / (pegarAltura ** 2);  
    if (calculo < 18.5) {
        document.getElementById('resultado').innerHTML = "IMC: " + calculo.toFixed(2);
        document.getElementById('categoria').innerHTML = "Abaixo do peso";
    }else if (calculo <= 24.9) {
        document.getElementById('resultado').innerHTML = "IMC: " + calculo.toFixed(2);
        document.getElementById('categoria').innerHTML = "Peso normal";
    }
    else if (calculo <= 29.9) {
        document.getElementById('resultado').innerHTML = "IMC: " + calculo.toFixed(2);
        document.getElementById('categoria').innerHTML = "Sobrepeso";
    }
    else if (calculo <= 34.9) {
        document.getElementById('resultado').innerHTML = "IMC: " + calculo.toFixed(2);
        document.getElementById('categoria').innerHTML = "Obesidade grau I";
    }
    else if (calculo <= 39.9) {
        document.getElementById('resultado').innerHTML = "IMC: " + calculo.toFixed(2);
        document.getElementById('categoria').innerHTML = "Obesidade grau II";
    }
    else {
        document.getElementById('resultado').innerHTML = "IMC: " + calculo.toFixed(2);
        document.getElementById('categoria').innerHTML = "Obesidade grau III";
    }
     
}