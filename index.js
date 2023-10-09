// Initialize new array
// var names = ["John", "Mark", "Jane"];
// var years = new Array(1900, 1901, 1903);

// console.log(names[2]);
// console.log(names.length);

// // Mutate array data
// names[1] = "Ben";
// names[names.length] = "Mary";
// console.log(names);

// //Different data types
// var john = ["John", "Smith", 1990, "teacher", false];

// john.push("blue");
// john.unshift("Mr.");
// console.log(john);

// john.pop();
// john.pop();
// john.shift();

// console.log(john);

// console.log(john.indexOf(19));

// var isDesigner = john.indexOf("designer") === -1 ? "John is NOT a designer" : "John IS a designer";
// console.log (isDesigner);


//object literal
// var john = {
//   firstName: "John",
//   surName: "Pitan",
//   birthYear: 2021,
//   family: ["huttty", "cukky", "lofty"],
//   job: "software engineer",
//   isMarried: true

// };

// console.log(john.surName);
// console.log(john["firstName"]);

// var x = "birthYear";
// console.log(john[x]);

// john.job = "laughter";
// john["isMarried"] = true;
// console.log(john);

// //new object sytax
// var jane = new Object();
// jane.name = "tolu";
// jane['age'] = '35';
// jane.birthYear = 1968;
// console.log(jane);


// var john = {
//   firstName: "John",
//   surName: "Pitan",
//   birthYear: 2021,
//   family: ["huttty", "cukky", "lofty"],
//   job: "software engineer",
//   isMarried: true,
//   calcAge: function()
//   {
//     this.age = 2018 - this.birthYear;
//   }
// };

// john.calcAge();
// console.log(john);

// function calculateAge(birthYear) {
//   return 2018 - birthYear;
// }

// var ageBukola = calculateAge(1990);
// var ageMike = calculateAge(1985);
// var ageBola = calculateAge(1950);
// console.log(ageBukola, ageMike, ageBola);

// function yearsUtilRetirement(year, firstName) {
//   var age = calculateAge(year);
//   var retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(firstName + ' retires in ' + retirement + ' years');
//   } else {
//     console.log(firstName + ' is already retired.');
//   }
// }

// yearsUtilRetirement(1990, 'Johnson');
// yearsUtilRetirement(1974, 'Mike');
// yearsUtilRetirement(1940, 'Bolaji');
