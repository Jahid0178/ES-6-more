const fish = {id: 58, name: 'King Hilsha', price: 9000, phone: '01789293803', address: 'Chandpur', color: 'silver'};
// const phone = fish.phone;
// const price = fish.price;
// const color = fish.color;
// const id = fish.id;

const { phone, price, color, id } = fish;

// console.log(phone, price);
// console.log(phone, color);
// console.log(phone, id);

const company = { name: 'GP', ceo: { name: 'Ajmol', id: 1, food: 'fuchka' }, web: { work: 'website developemnt', employee: 22, framework: 'react' } };

// const work = company.web.work;
// const framework = company.web.framework;
// const employe = company.web.employee;

const {work, employee} = company.web;
const {name, food} = company.ceo;

console.log(work, employee, name, food);