function calcularImc() {
    var pegarPeso = parseFloat(document.getElementById('peso').value); 
    var pegarAltura = parseFloat(document.getElementById('altura').value); 
    var calculo = pegarPeso / (pegarAltura ** 2);  
    document.getElementById('resultado').innerHTML = "IMC: " + calculo.toFixed(2); 
}