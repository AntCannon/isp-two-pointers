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
  return 'No possible pairs';
}

console.log(`arr arr1K min and max:`, gen.arr1K[0], gen.arr1K[Math.floor((gen.arr1K.length-1)/2)], gen.arr1K[gen.arr1K.length-1]);
console.log(`NL start:`, start = Date.now());
console.log(twoSumNL(gen.arr1K, 9980));
console.log(`NL finish:`, finish = Date.now());
console.log(`NL arr runtime:`, finish - start);
