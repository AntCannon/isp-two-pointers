const gen = require('./genArr.js');

// twoSum problem with nested loop return the indices.

// nested loop sum finder
function twoSumNL(sArr, target) {
  for (let i = 0; i < sArr.length-2; i++) {
    for (let j = i + 1; j < sArr.length-1; j++) {
      const sum = sArr[i] + sArr[j];
      if (sum === target) return [i, j];
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
    return [leftPointer, rightPointer];
    } else if (sum < target) {
    leftPointer++;
    } else {
    rightPointer--;
    }
  }
  
  return 'TP NO SATISFACTORY PAIRS'
  }

console.log(`arr arr1K min, mid & max:`,
gen.arr1K[0],
gen.arr1K[Math.floor((gen.arr1K.length-1)/2)],
gen.arr1K[gen.arr1K.length-1], '\n');

// nested loop VS. two pointer test case: 1K
const target1K = 8753;
console.log(`NL start:`, start = Date.now());
console.log(twoSumNL(gen.arr1K, target1K));
console.log(`NL finish:`, finish = Date.now());
console.log(`NL arr runtime:`, finish - start, '\n');

console.log(`TP start:`, start = Date.now());
console.log(twoSumTP(gen.arr1K, target1K));
console.log(`TP finish:`, finish = Date.now());
console.log(`TP arr runtime:`, finish - start, '\n');

