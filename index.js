const sortedArr = [-10, -5, -3, 1, 2, 6, 8];

function twoSum (sArr, target) {
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
  
    return null
  }

  console.log(twoSum(sortedArr, -15));