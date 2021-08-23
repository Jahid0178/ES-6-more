// 1. let and const
const wife = 'Prima';
let phone = 'iphone 10';
phone = 'samsung s6';

// 2. template string
const myNotes = `I am mojnu. i have a laili and her name is ${wife}`;
console.log(myNotes);

// 3. default parameter and spread
function maxNumber(array = []) {
    const max = Math.max(...array);
    return max;
}

const biggest = maxNumber();


// arrow function
// function square(x) {
//     return x * x;
// };
const square = x => x * x;
console.log(square(8));