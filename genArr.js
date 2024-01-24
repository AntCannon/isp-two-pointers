// creates arrays of different lengths of 1 * 10^n.

// function that generates an array of unique random numbers of n length and sorts in ascending order.

function genSortedUniqueArr(len) {
  const uniqueNumbers = new Set();

  while (uniqueNumbers.size < len) {
    const randomNumber = Math.floor(Math.random() * 5 * len);
    uniqueNumbers.add(randomNumber);
  }

  const sortedUniqueArray = Array.from(uniqueNumbers).sort((a, b) => a - b);
  return sortedUniqueArray;
}

// arrays of various powers of 1*10^n
// comment in/out respective arrays here and in the module exports at line 35
console.time('gen arrays');
  
// const arr10 = genSortedUniqueArr(10);
// const arr100 = genSortedUniqueArr(100);
// const arr1K = genSortedUniqueArr(1_000);
// const arr10K = genSortedUniqueArr(10_000);
// const arr100K = genSortedUniqueArr(100_000);
const arr1M = genSortedUniqueArr(1_000_000);
// const arr10M = genSortedUniqueArr(10_000_000);
// const arr100M = genSortedUniqueArr(100_000_000);
  
console.timeEnd('gen arrays');

// export object of different sized arrays.

module.exports = {
  // arrTest: [1,2,3,4,5],
  // arr10: arr10,
  // arr100: arr100,
  // arr1K: arr1K,
  // arr10K: arr10K,
  // arr100K: arr100K,
  arr1M: arr1M,
  // arr10M: arr10M,
  // arr100M: arr100M,
}