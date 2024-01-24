// use this to compare the run time of the nested loop solution and the two pointer algo solution for two sum problems of arrays of different  exponent form lengths.

const gen = require('./genArr.js');

// twoSum problem with nested loop return the indices.

// nested loop sum finder
function twoSumNL(sArr, target) {
  for (let i = 0; i < sArr.length-1; i++) {
    for (let j = i + 1; j < sArr.length; j++) {
      const sum = sArr[i] + sArr[j];
      if (sum === target) return `indices: ${i, j}, items: ${sArr[i], sArr[j]}`;
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
    return `indices: ${leftPointer, rightPointer}, items: ${sArr[leftPointer], sArr[rightPointer]}`;
    } else if (sum < target) {
    leftPointer++;
    } else {
    rightPointer--;
    }
  }
  
  return 'TP NO SATISFACTORY PAIRS'
  }

const arrToTest = gen.arr10K;
const arrLabel = 'arr10K';
console.log(`${'-'.repeat(50)}\nTESTING ${arrLabel}\n${'-'.repeat(50)}`);
 

console.log(`\n${arrLabel} data`,
`\nlength:`, arrToTest.length,
`\nmin:`, arrToTest[0],
`\nmid`, arrToTest[Math.floor((arrToTest.length-1)/2)],
`\nmax`, arrToTest[arrToTest.length-1],
`\nmin sum:`, arrToTest[0] + arrToTest[1],
`\nmax sum:`, arrToTest[arrToTest.length-2]+ arrToTest[arrToTest.length-1],'\n');
// console.log(gen.arr10K);

// Nested loop run time
const targetToTest = 99_900; //  lowest: ~30 mid: ~500_000 highest: ~999_980
console.log(`targetToTest`, targetToTest);
console.log(`\n${'-'.repeat(50)}\n${arrLabel} Nested Loop Run Time\n${'-'.repeat(50)}`);

console.time(`NL ${arrLabel}`);
console.log(twoSumNL(arrToTest, targetToTest));
console.timeEnd(`NL ${arrLabel}`);

// Two pointer run time
console.log(`\n${'-'.repeat(50)}\n${arrLabel} Two Pointer Runtime\n${'-'.repeat(50)}`);

console.time(`TP ${arrLabel}`);
console.log(twoSumTP(arrToTest, targetToTest));
console.timeEnd(`TP ${arrLabel}`);