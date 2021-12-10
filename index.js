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






// 3. ===== Map =====

// 4. ===== Reduce =====
