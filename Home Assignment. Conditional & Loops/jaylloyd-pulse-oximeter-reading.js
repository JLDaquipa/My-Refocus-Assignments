
// Oxygen Saturation Onservation
function oxygenSaturationCheck(oxygenSat){

    let result = "";

    if(oxygenSat >= 96){
        result = "Normal Reading.";
    }
    else if(oxygenSat === 95){
        result = "Acceptable to continue home monitoring."
    }
    else if(oxygenSat === 93 || oxygenSat === 94){
        result = "Seek advice from health professionals.";
    }
    else{
        result = "Seek urgent medical advice.";
    }

    return result;

}

// Pulse Rate Observation
function pulseRateCheck(pulseRate){

    let result = "";

    if(pulseRate >= 40 && pulseRate <= 100){
        result = "Normal Reading.";
    }
    else if(pulseRate >= 101 && pulseRate <= 109){
        result = "Acceptable to continue home monitoring.";
    }
    else if(pulseRate >= 110 && pulseRate <= 130){
        result = "Seek advice from health professionals.";
    }
    else if(pulseRate >= 131){
        result = "Seek urgent medical advice."
    }
    else{
        result = "No result.";
    }

    return result;

}

let oxygenSat = 95; // Oxygen Saturation (SpO2)%
let pulseRate = 115; // Pulse Rate, beats per minute

console.log(`Oxygen Saturation: ${oxygenSaturationCheck(oxygenSat)}`);
console.log(`Pulse Rate: ${pulseRateCheck(pulseRate)}`);

