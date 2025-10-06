function converter() {
    const temperatura = parseFloat(document.getElementById("temperatura").value);
    const de = document.getElementById("de").value;
    const para = document.getElementById("para").value;
    const resultado = document.getElementById("resultado");

    let tempConvertida;

    if (isNaN(temperatura)) {
        resultado.innerHTML = "Por favor, insira um valor válido.";
        return;
    }

    let emCelsius;
    if (de === "Celsius") {
        emCelsius = temperatura;
    } else if (de === "Fahrenheit") {
        emCelsius = (temperatura - 32) * 5 / 9;
    } else if (de === "Kelvin") {
        emCelsius = temperatura - 273.15;
    }
    
    if (para === "Celsius") {
        tempConvertida = emCelsius;
    } else if (para === "Fahrenheit") {
        tempConvertida = (emCelsius * 9 / 5) + 32;
    } else if (para === "Kelvin") {
        tempConvertida = emCelsius + 273.15;
    }

    resultado.innerHTML = `${temperatura.toFixed(2)}° ${de} = ${tempConvertida.toFixed(2)}° ${para}`;
}
