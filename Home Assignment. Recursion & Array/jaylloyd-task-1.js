
const arr = [
    "Web Developer",
    "Refocus",
    "Web Developer",
    "Web Developer",
    "Refocus",
    "Awesome",
];


let elementCount = {};

arr.forEach((elements) => {

    // created a variable that will hold an array of elements that is equal with the current element
    let sameElements = arr.filter((el) => {return el === elements});

    // then add the current element as an element to the "elementCount" object with a value of how many elements inside the "sameElements" variable have which represents the counting
    elementCount[elements] = sameElements.length;
    
})

console.log(elementCount);

