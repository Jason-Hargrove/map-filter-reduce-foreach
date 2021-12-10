// console.log everything.
const log = console.log;
// Array Methods Explained : Filter vs Map vs Reduce vs Foreach

// 1. Foreach
// Foreach takes a callback function an runs that callback function on each element of the array one by one.
let sample = ['Richard', 'Jason', 'Hargrove'];

sample.forEach((elem, index) => log(`${elem} comes at ${index}`));

// forEach works as a traditional for loop. Looping over the array and providing you array elements to do operation on them.

