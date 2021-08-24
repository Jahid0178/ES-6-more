class Support {
    name;
    role = 'Support web developer';
    address = 'BD';
    constructor (name, address) {
        this.name = name;
        this.address = address;
    }
    StartSession () {
        console.log(this.name, 'start a support session');
    };
};

const jahid = new Support('Jahidul Haque', 'Savar');
const rohim = new Support('Rohim Uddin', 'Dhaka');