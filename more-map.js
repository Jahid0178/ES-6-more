const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];
const friendLength = friends.map(friend => friend.length);
// console.log(friendLength);

const product = [
    {name: 'bottle', price: 50, color: 'yellow'},
    {name: 'mobile phone', price: 25000, color: 'black'},
    {name: 'mouse', price: 500, color: 'black'},
    {name: 'speaker', price: 1500, color: 'black'}
];

const productNames = product.map(products => products.name);
const productPrice = product.map(products => products.price);
const productColor = product.map(products => products.color);
// console.log(productNames, productPrice, productColor);
product.forEach(product => console.log(product))

// get property by for loop

// const productNames = [];
// for (const products of product) {
//     const productValue = products.name;
//     productNames.push(productValue);
// }
// console.log(productNames);