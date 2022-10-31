
// Celsius to Kelvin Formula: K = Celsius + 273.15
// Celsius to Kelvin Formula: K = ( Fahrenheit + 459.67) * 5/9

// Converts Celsius to Kelvin Function
function convertCelsiusToKelvin(tempCelsius){
    let kelvin = tempCelsius + 273.15;
    return kelvin;
}


// Converts Fahrenheit to Kelvin Function
function convertFahrenheitToKelvin(tempFahrenheit){
    let kelvin = (tempFahrenheit + 459.67) * 5 / 9;
    return kelvin;
}

console.log(convertCelsiusToKelvin(10));
console.log(convertFahrenheitToKelvin(60));


