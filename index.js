// console.log everything.
const log = console.log;
// Array Methods Explained : Filter vs Map vs Reduce vs Foreach

// 1. ===== Foreach =====
// Foreach takes a callback function an runs that callback function on each element of the array one by one.
// let forEachArr = ['Richard', 'Jason', 'Hargrove'];

// sample.forEach((elem, index) => log(`${elem} comes at ${index}`));

// forEach works as a traditional for loop. Looping over the array and providing you array elements to do operation on them.

// function sampleChange(arr) {
//     arr.forEach((elem, index) => {
//         return (index % 2 !== 0 ? log(elem = "Hi. I'm not divisible by 2") : log(elem.toLowerCase()))
//     });
// }
// sampleChange(forEachArr);


// 2. ===== Filter =====
// Lets you provide a callback for every element and returns a filtered array.
// Filter executes the callback and check its return value.
// If the value is true, the element remains in the resulting array.
// If the return value is false the element will be removed for the resulting array.

// let filterSample = [1, 2, 3, 4, 5, 6];
// let filterSample = ["This", "Is", "My", "Boomstick!"];

// let result = filterSample.filter(elem => elem !== 2);
// log(result);

// Shorthand nullish filtering.
// const groceries = ['apple', null, 'milk', undefined, 'bread', ''];
//
// const cleanList = groceries.filter(Boolean);
//
// const justApples = groceries.filter(e => e === 'apple');
// const isNotBread = groceries.filter(elem => elem !== 'bread' && elem !== 'milk' );
//
// log(cleanList);
// log(justApples);
// log(isNotBread);


// ============================================
// Map, Reduce, and Filter - JS Array Functions
// ============================================

// ===== Map =====
// map() is used for createing a new array from an exixting one,
// applying a function to each one of the elements of the first array.

// Syntax
// let new_array = arr.map(function callback(elemnt, index, array) {
//   // Return value for new_array
// }[, thisArg]);

// Example
// const numbers = [1, 2, 3, 4];
// const doubled = numbers.map(item => item * 2);
// log(doubled);

// ===== Filter =====
// filter() method takes each element in the array and applies a conditional statement against it.
// If this conditional returns true, the element gets pushed to the output arr.
// If condition returns false, the element does not get pushed to the output arr.

// Syntax
// let new_array = arr.filter(function callback(element, index, array) {
//   // Return true of false
// }[, thisArg]);

// Examples
// const numbers = [1, 2, 3, 4];
// const evens = numbers.filter(item => item % 2 === 0);
// log(evens);
//
// const randomArr = [null, "Jason", "Is cool!", 2, undefined, false];
// const notNull = randomArr.filter(Boolean);
// log(notNull);
//
// const students = [
//   { name: 'Quincy' , grade: 96 },
//   { name: 'Jason', grade: 84 },
//   { name: 'Alexis' , grade: 100 },
//   { name: 'Sam', grade: 65 },
//   { name: 'Katie', grade: 90 },
// ]
//
// const studentGrades = students.filter(student => student.grade >= 90);
// log(studentGrades);


// ===== Reduce =====
// reduce() reduces and arr of values down to just one value.
// To get the output value, it runs a reducer function on each element in the arr.

// Syntax
// arr.reduce(callback[, initialValue]);
// const numbers = [1, 2, 3, 4];
// const sum = numbers.reduce(function (result, item) {
//   return result + item;
// }, 0);
// log(sum); // 10

let pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'rabbit'];

let petCounts = pets.reduce(function(obj, pet) {
  if (!obj[pet]) {
    obj[pet] = 1;
  } else {
      obj[pet]++
  }
  return obj;
}, {});

log(petCounts);

// Watch video next.  Link saved in "Working" folder on Firefox.
