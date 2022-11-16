

function calculateBMI(height, weight){

    let BMI = 0;

    BMI = parseFloat((weight / (height**2)).toFixed(2));

    if(BMI < 18.5){
          return `Your BMI is ${BMI}, indicating your weight is in the Underweight category`;    
    }else if(BMI > 18.5 && BMI < 24.9){
          return `Your BMI is ${BMI}, indicating your weight is in the Healthy Weight category`;
    }else if(BMI > 25 && BMI < 29.9 ){
          return `Your BMI is ${BMI}, indicating your weight is in the Overweight category`;
    }else{
          return `Your BMI is ${BMI}, indicating your weight is in the Obese category`;
    }

}





let height = 1.52; // in meters
let weight = 60; // in kilograms

console.log(calculateBMI(height, weight));

module.exports = calculateBMI;
