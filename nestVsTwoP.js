// use this to compare the run time of the nested loop solution and the two pointer algo solution for two sum problems of arrays of different  exponent form lengths.


const gen = require('./genArr.js');

// twoSum problem with nested loop return the indices.

// nested loop sum finder
function twoSumNL(sArr, target) {
  for (let i = 0; i < sArr.length-1; i++) {
    for (let j = i + 1; j < sArr.length; j++) {
      const sum = sArr[i] + sArr[j];
      if (sum === target) return ['indices:',[i, j], 'items:',[sArr[i], sArr[j]]];
    }
  }
  return 'NL NO SATISFACTORY PAIRS';
}

function twoSumTP(sArr, target) {
  let leftPointer = 0;
  let rightPointer = sArr.length-1;
  
  while (leftPointer < rightPointer) {
    const sum = sArr[leftPointer] + sArr[rightPointer];
  
    if (sum === target) {
    return ['indices:', [leftPointer, rightPointer], 'items:',[sArr[leftPointer], sArr[rightPointer]]];
    } else if (sum < target) {
    leftPointer++;
    } else {
    rightPointer--;
    }
  }
  
  return 'TP NO SATISFACTORY PAIRS'
  }

// ------------------- 1K

// // nested loop VS. two pointer test case: 1K
// // arr data
// console.log(`arr1K min, mid & max:`,
// gen.arr1K[0],
// gen.arr1K[Math.floor((gen.arr1K.length-1)/2)],
// gen.arr1K[gen.arr1K.length-1], '\n');

// // Nested loop run time
// const target1K = 50;
// console.log(`NL start:`, start = Date.now());
// console.log(twoSumNL(gen.arr1K, target1K));
// console.log(`NL finish:`, finish = Date.now());
// console.log(`NL arr runtime:`, finish - start, '\n');

// // Two pointer run time
// console.log(`TP start:`, start = Date.now());
// console.log(twoSumTP(gen.arr1K, target1K));
// console.log(`TP finish:`, finish = Date.now());
// console.log(`TP arr runtime:`, finish - start, '\n');

// // ------------------- 10K

// // nested loop VS. two pointer test case: 10K
// // arr data
// console.log(`arr arr10K length, min, mid & max:`,
// gen.arr10K.length,
// gen.arr10K[0],
// gen.arr10K[Math.floor((gen.arr10K.length-1)/2)],
// gen.arr10K[gen.arr10K.length-1], '\n');
// // console.log(gen.arr10K);

// // Nested loop run time
// const target10K = 90000;
// console.log(`NL start:`, start = Date.now());
// console.log(twoSumNL(gen.arr10K, target10K));
// console.log(`NL finish:`, finish = Date.now());
// console.log(`NL arr runtime:`, finish - start, '\n');

// // Two pointer run time
// console.log(`TP start:`, start = Date.now());
// console.log(twoSumTP(gen.arr10K, target10K));
// console.log(`TP finish:`, finish = Date.now());
// console.log(`TP arr runtime:`, finish - start, '\n');


// ------------------- 100K


// nested loop VS. two pointer test case: 100K
// arr data
console.log(`\narr100K data`,
`\nlength:`, gen.arr100K.length,
`\nmin:`, gen.arr100K[0],
`\nmid`, gen.arr100K[Math.floor((gen.arr100K.length-1)/2)],
`\nmax`, gen.arr100K[gen.arr100K.length-1],
`\nmin sum:`, gen.arr100K[0] + gen.arr100K[1],
`\nmax sum:`, gen.arr100K[gen.arr100K.length-2]+ gen.arr100K[gen.arr100K.length-1],'\n');
// console.log(gen.arr10K);

// Nested loop run time
const target100K = 999_922; //  lowest: ~30 mid: ~500_000 highest: ~999_980
console.log(`target100K`, target100K)
console.log(`NL start:`, start = Date.now());
console.log(twoSumNL(gen.arr100K, target100K));
console.log(`NL finish:`, finish = Date.now());
console.log(`NL arr runtime:`, finish - start, '\n');

// Two pointer run time
console.log(`TP start:`, start = Date.now());
console.log(twoSumTP(gen.arr100K, target100K));
console.log(`TP finish:`, finish = Date.now());
console.log(`TP arr runtime:`, finish - start, '\n');