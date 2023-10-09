// Loops and iterations

//For loop
// for (var i = 1; i <= 20; i += 2) {
//   console.log(i);
// }

// var john = ["John", "Smith", 1990, "teacher", false, "blue"];
// for (var i = 0; i < john.length; i++) {
//   console.log(john[i]);

// }

// //While loop
// var i = 0;
// while (i < john.length) {
//   console.log(john[i]);
//   i++;
// }

//continue and break statement

/*var john = ["John", "Smith", 1990, "teacher", false, "blue"];
for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== "string") continue;
  console.log(john[i]);
}
for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== "string") break;
  console.log(john[i]);
}

*/

//looping backwards
/*for (var i = john.length - 1; i >= 0; i--) {
  console.log(john[i]);
}

var name = 'Bukola';
var job = 'hairDesigner';
var age = 2;
var shoeSize = 34;
console.log(name, job);
console.log(name + ' is ' + age + ' his shoe size is ' + shoeSize);

*/

// alert(name + ' is ' + age + ' his shoe size is ' + shoeSize);

// var lastName = prompt("What is her last Name?");
// console.log(name + "  ");

//Basic Operators
var year, yearJohn, YearMary;
now = 2018;
ageJohn = 28;
ageMary = 33;

//Math operators
yearJohn = now - 28;
yearMary = now - 33;

console.log(yearMary);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

//Logical Operators
var johnOlder = ageJohn < ageMary;
console.log(johnOlder);

//typeof Operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'mark is older');

var x;
console.log(typeof x);

//Operator precedence

var now = 2012;
var yearJohn = 1945;
var fullAge = 50;

var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

//Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

//Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

// more operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x);
x--;
console.log(x);