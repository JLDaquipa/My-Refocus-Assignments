

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


// MANUAL UNIT TESTING

function bmiCalculation(height, weight){
     return parseFloat((weight / (height**2)).toFixed(2));
}

function testbmiCalculation(){
     const result = bmiCalculation(1.52, 60);
     const expected = 25.97;

     console.assert(result === expected, `The result ${result} doesn't match the expected value ${expected}`);
}

testbmiCalculation(); // Passed



function test1Calculator(){
     const result = calculateBMI(1.52, 60);
     const expected = "Your BMI is 25.97, indicating your weight is in the Overweight category";

     console.assert(result === expected, `The result "${result}" doesn't match the expected value "${expected}"`);
}

function test2Calculator(){
     const result = calculateBMI(1.85, 72);
     const expected = "Your BMI is 21.04, indicating your weight is in the Healthy Weight category";

     console.assert(result === expected, `The result "${result}" doesn't match the expected value "${expected}"`);
}

function test3Calculator(){
     const result = calculateBMI(2.1336, 72.5);
     const expected = "Your BMI is 15.93, indicating your weight is in the Underweight category";

     console.assert(result === expected, `The result "${result}" doesn't match the expected value "${expected}"`);
}

test1Calculator(); // Passed
test2Calculator(); // Passed
test3Calculator(); // Passed
