const fs = require('fs');


const genders = ['M','F'];
const maleNames = ['Paul', 'Peter', 'John', 'Nick', 'Richard'];
const femaleNames = ['Jane', 'Janet', 'Grace', 'Jeniffer', 'Emily'];
const lastNames = ['Baker', 'Smith', 'Bucket', 'Dough', 'Jackson'];
const people = [];

const randChoice = (arr) => {

  const randomGenerate = Math.floor(Math.random() * arr.length);
  const item = arr[randomGenerate];

  return item;
}

for (let i = 0; i<20; i++) {
  const genderRandom = randChoice(genders);

  let name;

  if (genders === 'M') {
    name = randChoice(maleNames);
  }
  else {
    name = randChoice(femaleNames);
  };
  const lastName =randChoice(lastNames);

  const generatedPerson = {
    firstName: name,
    lastName: lastName,
    gender: genderRandom,
    age: Math.floor(Math.random() * 100),
    email: `${name.toLowerCase()}.${lastName.toLowerCase()}@email.com`,
    telephone: `+48${Math.floor(100000000 + Math.random() * 900000000)}`,
  };

  people.push(generatedPerson);
};


console.log('people', people);

const data = JSON.stringify(people);


fs.writeFile('people.json', data, (err) => {
  if (err) throw ('Something went wrong',err);
  console.log('The file has been saved!');
});