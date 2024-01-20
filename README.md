# Independent Study Project - Two Pointer 
independent study project researching two pointer algorithm

## Introduction

uses
- Searching pairs in a sorted array. [^1]
[^1]: geekforgeeks.com
- Find sets of data that fit a certain condition or criterion. [^2]
[^2]: medium.com
- Moving number to the end while keeping relative order. [^3]
[^3]: opengenius.org

The Two pointer algorithm or technique is used in a loop mostly used to search for combinations of elements in a sorted array or compare the the items in a sorted array with each other or something else.

In the two pointer method the two pointers cam move from the outside in one being a left pointer and one being the right pointer, or the pointer can start from the same place and move the same direction with one being a slow pointer and the other being a fast pointer.

We are going to look at the Two Pointer Technique being used in a two sum problem. Some select uses are named, but not explored, in the Use Case section.


## Algorithm Description
### The Technique
Instead of iterating through a sorted array twice using a nested loop to interact with different combinations of elements in array, we can use one iteration and two pointers.

### The Problem
Return the index of the elements whose sum is te target number. If none is found return null.

1. Initialization: Start with a sorted array

```js
const sortedArr = [-10, -5, -3, 1, 2, 6, 8];
```

2. Define function: Include parameters
* @param {numbers[]} sArr - sorted array of numbers.
* @param {number} target - the number we are looking for.
* @return {numbers[]} indices - the indexes of the two numbers that satisfy the target condition 

```js
function twoSum (sArr, target) {
}
```

3. Declare variables:

```js
  // will hold the two indices that satisfy the twoSum condition.
  const satisfyingIndices = [];
  // the leftPointer starts at the first index of the array.
  let leftPointer = 0;
  // rightPointer starts at the end of the array.
  let rightPointer = sArr.length-1;
```

4. Iterate: Iterate through the sorted array while the the left and right pointers are not the same.

```js
  while (leftPointer < rightPointer) {
  }
```

5. Check: Use an if statement to check our three possible conditions when comparing our sum to the target.

- Check if the elements at the left and right pointer satisfy the condition in this case the sum.

```js
    // calculate the sum of the elements at the pointers.
    const sum = sArr[leftPointer] + sArr[rightPointer];
    // check if sum is equal to the target.
    if (sum === target) {
      // if true then return out of the function
      return [leftPointer, rightPointer]
    }
```

-  Sum is less than: If the sum is not equal to the target it is either bigger than or less than the target. So we continue the if statement, using else if to check the less than condition.

```js
    // check if sum is less that target
    } else if (sum < target) {
      // if true then increment leftPointer. The only way to mak the sum get closer to target is to try a larger number. Since the array is sorted the only way to get the next largest combination is to increment the leftPointer.
      leftPointer++;
    }
```

- Sum is more than target: If the sum is not equal to or less than the sum it must be greater. close the if statement with else.

```js
    // the only other conditions, sum equal to target and sum less than target, were tested already so we use an else to catch sum more than target.
    } else {
      // If sum is more than target the only way to make sum smaller is to make it smaller. Since the array is sorted the only way to make sum smaller is to move the rightPointer inward by decrementing it to get the next smaller element.
      rightPointer--;
    }
```

6. Repeat: repeat until the condition is met. If the condition is not met then the return statement in the loop will never trigger. Therefore the return statement at the end of the function will trigger.

```js
  return null;
```

## Full Function

```js
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
```

## Big O Evaluation

### Time Complexity

If the array's length is `n`, and for each element in the array we iterate over the sorted array from both ends by incrementing `leftPointer` or decrementing `rightPointer` after checking if elements satisfy the condition. The worst case is going through the entire array `O(n)`.

```js
function twoSum (sArr, target) {
  let leftPointer = 0;
  // SC creating a variable --> 1
  let rightPointer = sArr.length-1;
  // SC creating a variable --> 1
  while (leftPointer < rightPointer) {
  // TC while loop over the entire length of the array until leftPointer and rightPointer meet --> n
    const sum = sArr[leftPointer] + sArr[rightPointer];
    // TC - 1 operation
    // SC - create one variable

    if (sum === target) { // TC 1 operation
      return [leftPointer, rightPointer];
    } else if (sum < target) { // TC 1 operation
    leftPointer++; // TC 1 operation
    } else {
    rightPointer--; // TC 1 operation
    }
    // TC worst case 2 checks happen.
  }
}

// 1 + (1 + n + 2) --> 1 + (n+3)
// Dropping the constants and linear expressions --> O(n)
```

### Space Complexity

Create three variables. Two outside the while loop `leftPointer` and `rightPointer` and one inside `sum`  --> `O(2 + 1)` --> `O(3)`.

## Use Cases

Because selection sort is not very efficient it's good for small data sizes, and as an intro for sorting algorithms for beginner coders

## Edge Cases and Concerns

As mentioned above, the algorithm is not very efficient so the edge cases and concerns would be for large data inputs.
Other sorting algorithms such as quick-sort and merge-sort have a time complexity of O(n\*log(n)) which are way more efficient.

## Citations

[GeekForGeeks - Javascript Program for Two Pointers Technique](https://www.geeksforgeeks.org/javascript-program-for-two-pointers-technique/)

[Medium - The Two Pointer technique](https://medium.com/codex/the-two-pointer-technique-8c44b0b3890)

[Basedash - The Two Pointer Technique in Javascript](https://www.basedash.com/blog/the-two-pointers-technique-in-javascript)

[Quora - What Exactly is the Two Pointer Method Solution?](https://www.quora.com/What-exactly-is-the-two-pointer-method-solution)

[Tutorialspoint - JAvascript Program for Two Pointer Technique](https://www.tutorialspoint.com/javascript-program-for-two-pointers-technique)

[Opengenius - Two Pointer Technique in Javascript](https://iq.opengenus.org/two-pointer-technique-in-javascript/)