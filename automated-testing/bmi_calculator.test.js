const calculateBMI = require("./bmi_calculator");


test("Result for the BMI is 25.97 when height is 1.52m and weight is 60k and it's in the Overweight Category", () => {
    let height = 1.52;
    let weight = 60;
    expect(calculateBMI(height, weight)).toBe("Your BMI is 25.97, indicating your weight is in the Overweight category")
})

test("Result for the BMI is 15.93 when height is 2.1336m and weight is 72.5k and it's in the Underweight Category", () => {
    let height = 2.1336;
    let weight = 72.5;
    expect(calculateBMI(height, weight)).toBe("Your BMI is 15.93, indicating your weight is in the Underweight category")
})

