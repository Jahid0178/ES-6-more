const numbers = [4, 6, 8, 10];
const output2 = [];

// function
// function doubleIt(number) {
//     return number * 2;
// }

// arrow function

const doubleValue = number => number * 2;

for (const number of numbers) {
    const result = doubleValue(number);
    output2.push(result);
}

// console.log(output2);

// 1. loop krsi.
// 2. element diye function ke call krsi.
// 3. result ke ekta array er moddhe push krsi.

// const output = numbers.map(doubleValue);
// const output = numbers.map(number => number * 2)
// const output = numbers.map(x => x * 2); // bujhi nai kivabe krse????????????
const squares = numbers.map(x => x * x);
console.log(squares);