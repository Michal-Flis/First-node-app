const fs = require('fs');

const genders = ['Male', 'Female'];

const maleNames = ['John', 'Jack', 'Adam', 'Patrick', 'Leon']

const femaleNames = ['Jane', 'Amanda', 'Nadia', 'Carol', 'Natalie']

const lastNames = ['Doe', 'Smith', 'Random', 'Test', 'Fury']

let ages = [];

for (let i = 18; i <= 78; i++) {
    ages.push(i);
};

const personalityChoice = function () {
    let people = [];
    for (p = 0; p < 20; p++) {
        let RNG = Math.random();
        let person = {
            gender: '',
            name: '',
            lastName: '',
            age: ''
        };
        const genderNumber = Math.ceil(RNG * genders.length) - 1;
        const gender = genders[genderNumber];
        person.gender = gender;
        if (gender == 'Male') {
            const nameNumber = Math.ceil(RNG * maleNames.length) - 1;
            const name = maleNames[nameNumber];
            person.name = name;
        } else {
            const nameNumber = Math.ceil(RNG * femaleNames.length) - 1;
            const name = femaleNames[nameNumber];
            person.name = name;
        }
        const lastNameNumber = Math.ceil(RNG * lastNames.length) - 1;
        const lastName = lastNames[lastNameNumber];
        person.lastName = lastName;
        const ageNumber = Math.ceil(RNG * ages.length) - 1;
        const age = ages[ageNumber];
        person.age = age;

        people.push(person);
    }

    const parsedData = JSON.stringify(people);

    fs.writeFile('People.json', parsedData, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}

personalityChoice();