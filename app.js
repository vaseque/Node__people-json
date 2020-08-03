const fs = require('fs');

const genders = ['M', 'F'];
const maleNames = ['Rob', 'Jon', 'Ken', 'Pav', 'Stan', 'Ian', 'Alan', 'Andy'];
const femaleNames = ['Jen', 'Jo', 'Kelly', 'Ali', 'Kat', 'Pam', 'Mel', 'Sarah'];
const lastNames = ['Smith', 'Hay', 'Bee', 'Truman', 'Key', 'Price', 'Neville', 'Sobieski'];

function randChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const people = [];

for (let i = 0; i < 20; i++) {

  const gender = randChoice(genders);
  const firstName = gender === 'M' ? randChoice(maleNames) : randChoice(femaleNames);

  const person = {
    gender,
    firstName,
    lastName: randChoice(lastNames),
    age: Math.floor(78 - Math.random() * 60)
  };

  people.push(person);
}

const data = JSON.stringify(people);

fs.writeFile('people.json', data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
