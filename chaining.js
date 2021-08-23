// declare variable based on the name of an object property
const myObject = {x: 2, y: 50, z: 600, a: 25, b: 68};
const {x, y} = myObject;

// console.log('myObject', myObject?.p?.q);

// destructruing array
const [p, q] = [16, 35];
// console.log(p, q);

const [good, bad, very] = ['porshi', 'momotaj', 'jahid'];
// console.log(good, bad, very);

const {name, sky} = {name: 'Jahid', sky: 'blue', money: 500, color: 'purple'};
// console.log(name, sky);

const company = { 
    name: 'GP', 
    ceo: { 
        name: 'Ajmol', 
        id: 1, 
        food: 'fuchka' 
    }, 
    web: { 
        work: 'website developemnt', 
        employee: 22, 
        framework: 'react', 
        tech: 
        { 
            first: 'html', 
            second: 'css', 
            third: 'js' 
        }
    } 
};

console.log(company?.back?.tech.third);