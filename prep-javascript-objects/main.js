var person = {
  firstName: 'Michael',
  lastName: 'Van Doorn',
  hobby: 'Video Games'
};
console.log(person);

var fullName = `The person's name is: ${person.firstName} ${person.lastName}.`;
console.log(fullName);

person.job = 'SW Eng';
console.log(`The person's current job is ${person.job}.`);

person.previousJob = 'Problem Manager';
console.log(`The person's previous job is ${person.previousJob}.`);

console.log(person);
