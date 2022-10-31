
let cyclingHoursPerDay = 0.5;

let daysOfCycling = 15;

let caloriesPerHour = 450;

let totalHoursCycling = cyclingHoursPerDay * daysOfCycling;

let totalCaloriesBurns = caloriesPerHour * totalHoursCycling;

console.log(`Great work, Sam! After ${cyclingHoursPerDay} hours of running every day for a week, you may lose a total of ${totalCaloriesBurns} calories.`);