const numbers = [5, 7, 29, 49, 71, 55, 12, 18, 20];
const bigNumber = numbers.filter(number => number > 20);
const smallNumber = numbers.filter(number => number < 20);
// console.log(bigNumber, smallNumber);

const product = [
    {name: 'bottle', price: 50, color: 'yellow'},
    {name: 'mobile phone', price: 25000, color: 'black'},
    {name: 'mouse', price: 500, color: 'black'},
    {name: 'speaker', price: 1500, color: 'black'}
];

const expensive = product.filter(product => product.price > 500);
// console.log(expensive);

const blacks = product.filter(product => product.color == 'black');
// console.log(blacks);

const whiteItem = product.find(product => product.color == 'pink');
console.log(whiteItem);