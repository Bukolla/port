// formula for calculation
// BMI = mass / height^2 = mass / (height * height);

let petMass = 180 //kg
let petHeight = 1.8 //meters

let nimiMass = 120 //kg
let nimiHeight = 1.6 //meters

let BMIpet = petMass / (petHeight * petHeight);
let BMInimi = nimiMass / (nimiHeight * nimiHeight);
console.log(BMIpet, BMInimi);

let greaterBMI = BMIpet > BMInimi;
console.log('pet odogwwu ' + greaterBMI);

if (BMIpet > BMInimi) {
  console.log('Pet BMI is the greatest');
} else {
  console.log('nimi is the greatest of them all')
}

// objects
let bukola = {
  relationship :'married',
  age: 24,
  month: 'april',
  height: 1.7,
  child: 'diamond'
};

console.log(bukola.height);


let word = 'leg';
let myWord = word.split('');
let rev = myWord.reverse();
let join = rev.join('');

console.log(join)

if (word === join) {
  console.log('palindrome');
}else{
  console.log('ooo oh')
};


let massMark = 926;
let heightMark = 1.9;

let massJoin = 100;
let heightJoin = 1.35;

let BMIMark = massMark / (massMark * heightMark);
let BMIJoin = massJoin / (massJoin * heightJoin);
console.log(BMIMark, BMIJoin);

let markHigherBMI = BMIMark > BMIJoin;
console.log('is Mark\'s BMI higher than Join\'s? ' + markHigherBMI);

if (BMIMark > BMIJoin) {
  console.log('Mark\'s BMI is higher than Join\'s.');
} else {
  console.log('Join\'s BMI is higher then Mark\'s.')
}


// if  / else statements

let studentName = 'John';
let relationshipStatus = 'single';

if (relationshipStatus === 'married') {
  console.log(studentName + 'is married');
} else
{
  console.log(studentName + ' will you not marry?')
  }

let isMarried = false;
if (isMarried) {
  console.log(studentName + 'is married');
}
else {
  console.log(studentName + 'óga marry jare');
}

// boolean
let firstName = 'fiona'
let age = 21;

if (age < 14) {
  console.log(firstName + ' is  a boy');
} else if (age >= 13 && age < 20) {
  console.log(firstName + ' is a teenager')
}
else if (age >= 20 || age < 30) {
  console.log(firstName + ' is a young man')
  }
else {
  console.log(firstName + ' is a man');
}

let surName = 'anthony';
let personAge = 19;

if (personAge < 13) {
  console.log(surName + ' is a child')
} else if (personAge < 20 && age >= 18) {
  console.log(surName + ' is a teenager')
}
else {
  console.log(surName + " is a man");
}

//Ternary Operators and switch juice
let name = 'tola';
let factAge = 12;

factAge >= 18 ? console.log(name + ' drinks beer.')
  : console.log(name + ' drinks juice');

let drink = factAge >= 18 ? 'beer' : 'juice';
console.log(drink);

//dupicate if using an if/else statement

if (age >= 18) {
  let drink = 'beer';
} else {
  let drink = 'juice';
}

//Switch statement
let job = 'driver';
let localName = 'pain';

switch (job) {
  case "teacher":
  case 'designer':
    console.log(localName + " teaches kids how to write");
    break;
  case "driver":
    console.log(localName + " drives a ferarri");
    break;
  case "mechanic":
    console.log(localName + ' sells land');
    break;
  default:
    console.log(localName + ' does somthing else.');
}

let occupation = 'engineer';
let upName = 'onibuore';
switch (upName) {
  case 'tope':
  case 'titi':
    console.log(occupation + ' a beautiful name');
    break;
  case 'wale':
    console.log(occupation + ' is the best');
    break;
  default:
    console.log(occupation + ' not suited');
}