function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
var addTwoNumbersResult = addTwoNumbers(2, 2);
console.log(`addTwoNumbers Excerise: ${addTwoNumbersResult}.`);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
var convertHoursToMinutesResult = convertHoursToMinutes(2);
console.log(`convertHoursToMinutes Excerise: ${convertHoursToMinutesResult}.`);

function getGreeting(name) {
  return 'Hello' + ' ' + name + '!';
}
var getGreetingResult = getGreeting('World');
console.log(`getGreeting Excerise: ${getGreetingResult}.`);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
var addAndMultiplyBy5Result = addAndMultiplyBy5(10, 5);
console.log(`addAndMultiplyBy5 Excerise: ${addAndMultiplyBy5Result}.`);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
var multiplyAndDivideBy5Result = multiplyAndDivideBy5(35, 10);
console.log(`multiplyAndDivideBy5 Excerise: ${multiplyAndDivideBy5Result}.`);

function subtractTwoNumbers(num1, num2) {
  return (num1 - num2);
}
var subtractTwoNumbersResult = subtractTwoNumbers(22, 7);
console.log(`subtractTwoNumbers Excerise: ${subtractTwoNumbersResult}.`);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
var getCircleCircumferenceResult = getCircleCircumference(5);
console.log(`getCircleCircumference Excerise: ${getCircleCircumferenceResult}.`);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var getFullNameResult = getFullName('Juan', 'Ramirez');
console.log(`getFullName Excerise: ${getFullNameResult}.`);

function cube(number) {
  return Math.pow(number, 3);
}
var cubeResult = cube(5);
console.log(`cube Excerise: ${cubeResult}.`);
